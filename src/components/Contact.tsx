"use client";

import { useEffect, useRef, useState } from "react";
import GoogleMap from "./GoogleMap";

export type ContactContent = {
  left: {
    addressTitle: string;
    addressLines: string[];
    phoneTitle: string;
    phoneDisplay: string;
  };
  form: {
    title: string;
    placeholders: {
      name: string;
      company: string;
      email: string;
      phone: string;
      address: string;
      fleetSize: string;
      message: string;
    };
    submitLabel: string;
    successMsg: string;
    errorMsg: string;
    fleetOptions: { value: string; label: string }[];
    consentLabel: string; // Ajouté
    privacyLink: string;  // Ajouté
    privacyText: string;  // Ajouté
  };
  map: {
    lat: number;
    lng: number;
    title: string;
    zoom?: number;
  };
};

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  fleetSize: "" | "1-5" | "6-20" | "21-50" | "51+";
  message: string;
  consent: boolean;
  // Anti-spam
  website: string; // honeypot (doit rester vide)
  source: string; // hidden "Contact page"
  timeSinceRender?: number; // ms
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact({ content }: { content: ContactContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Références pour focus 1re erreur
  const refs = {
    name: useRef<HTMLInputElement>(null),
    company: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    address: useRef<HTMLInputElement>(null),
    fleetSize: useRef<HTMLSelectElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
    consent: useRef<HTMLInputElement>(null),
  };

  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    fleetSize: "",
    message: "",
    consent: false,
    website: "",
    source: "Contact page",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const renderedAt = useRef<number>(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helpers
  const emailOk = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(val.trim());

  const phoneOk = (val: string) => !val || /^[0-9 +().-]{6,}$/.test(val.trim()); // léger, tolérant (CH +41…)

  function validate(values: FormState): FormErrors {
    const e: FormErrors = {};
    if (!values.name.trim()) e.name = "Indiquez votre nom.";
    if (!values.email.trim()) e.email = "Indiquez votre email.";
    else if (!emailOk(values.email)) e.email = "Email invalide.";
    if (!phoneOk(values.phone)) e.phone = "Téléphone invalide.";
    if (!values.message.trim() || values.message.trim().length < 10)
      e.message = "Message trop court (min. 10 caractères).";
    if (!values.consent) e.consent = "Nécessaire pour être recontacté·e.";
    // Anti-spam
    if (values.website) e.website = "Suspicious.";
    const delta = Date.now() - renderedAt.current;
    if (delta < 2000) e.source = "Soumission trop rapide."; // même clé cachée
    return e;
  }

  // Gestion input
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // clear erreur du champ modifié
    setErrors((prev) => {
      const clone = { ...prev };
      delete clone[name as keyof FormErrors];
      return clone;
    });
  }

  // Focus 1re erreur si présente
  function focusFirstError(errs: FormErrors) {
    const order: (keyof FormState)[] = [
      "name",
      "email",
      "phone",
      "message",
      "consent",
    ];
    for (const key of order) {
      if (errs[key]) {
        // @ts-ignore
        refs[key]?.current?.focus?.();
        break;
      }
    }
  }

  // Soumission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const payload: FormState = {
      ...form,
      timeSinceRender: Date.now() - renderedAt.current,
    };

    const v = validate(payload);
    if (Object.keys(v).length) {
      setErrors(v);
      focusFirstError(v);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          address: "",
          fleetSize: "",
          message: "",
          consent: false,
          website: "",
          source: "Contact page",
        });
        setErrors({});
        renderedAt.current = Date.now(); // reset anti-spam
      } else {
        // Si le backend renvoie des erreurs par champ
        try {
          const data = await res.json();
          if (data?.fieldErrors) {
            setErrors(data.fieldErrors);
            focusFirstError(data.fieldErrors);
          } else {
            setStatus("error");
          }
        } catch {
          setStatus("error");
        }
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Rendu
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="scroll-mt-28 w-full bg-white overflow-hidden scroll-offset"
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Colonne gauche : Adresse + Carte */}
        <div
          className={`relative w-full md:w-1/2 border-r border-zinc-300 px-8 py-12 flex flex-col items-center md:items-end justify-center text-center md:text-right overflow-hidden min-h-[400px] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="relative z-10 bg-white/30 backdrop-blur-sm p-4 rounded-lg border border-white text-left w-fit space-y-6">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-4">
                {content.left.addressTitle}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed">
                {content.left.addressLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-700 mb-2">
                {content.left.phoneTitle}
              </h3>
              <p className="text-neutral-400 text-2xl md:text-4xl font-semibold">
                {content.left.phoneDisplay}
              </p>
            </div>
          </div>
          <div className="hidden md:block w-full h-[300px] mt-8 relative">
            <GoogleMap
              lat={content.map.lat}
              lng={content.map.lng}
              title={content.map.title}
              zoom={content.map.zoom ?? 15}
            />
          </div>
        </div>

        {/* Colonne droite : Formulaire */}
        <div
          className={`w-full md:w-1/2 px-8 py-12 flex flex-col items-center justify-center text-left transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-x-0 delay-300"
              : "opacity-0 translate-x-12"
          }`}
        >
          <div className="w-full bg-sky-100 px-6 py-10 rounded-xl shadow max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-700 text-center mb-8">
              {content.form.title}
            </h2>

            <form
              className="space-y-5 text-stone-700"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot + meta */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input type="hidden" name="source" value={form.source} />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.name} *
                  </label>
                  <input
                    ref={refs.name}
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.name}
                    className={`w-full px-4 py-3 border rounded-md bg-white ${
                      errors.name ? "border-red-500" : "border-gray-400"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.company}
                  </label>
                  <input
                    ref={refs.company}
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.company}
                    className={`w-full px-4 py-3 border rounded-md bg-white ${
                      errors.company ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.email} *
                  </label>
                  <input
                    ref={refs.email}
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.email}
                    className={`w-full px-4 py-3 border rounded-md bg-white ${
                      errors.email ? "border-red-500" : "border-gray-400"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.phone}
                  </label>
                  <input
                    ref={refs.phone}
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.phone}
                    className={`w-full px-4 py-3 border rounded-md bg-white ${
                      errors.phone ? "border-red-500" : "border-gray-400"
                    }`}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.address}
                  </label>
                  <input
                    ref={refs.address}
                    id="address"
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.address}
                    className={`w-full px-4 py-3 border rounded-md bg-white ${
                      errors.address ? "border-red-500" : "border-gray-400"
                    }`}
                    autoComplete="street-address"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="fleetSize"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    {content.form.placeholders.fleetSize}
                  </label>
                  <div className="relative">
                    <select
                      ref={refs.fleetSize}
                      id="fleetSize"
                      name="fleetSize"
                      value={form.fleetSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md bg-white text-base appearance-none ${
                        !form.fleetSize ? "text-gray-400" : "text-slate-700"
                      } ${
                        errors.fleetSize ? "border-red-500" : "border-gray-400"
                      }`}
                      aria-invalid={!!errors.fleetSize}
                    >
                      <option value="">
                        {content.form.fleetOptions[0].label}
                      </option>
                      {content.form.fleetOptions.slice(1).map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Flèche */}
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ▼
                    </span>
                  </div>
                  {errors.fleetSize && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fleetSize}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  {content.form.placeholders.message} *
                </label>
                <textarea
                  ref={refs.message}
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={content.form.placeholders.message}
                  className={`w-full px-4 py-3 h-32 border rounded-md bg-white resize-none ${
                    errors.message ? "border-red-500" : "border-gray-400"
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  required
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  ref={refs.consent}
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  className={`h-5 w-5 rounded border accent-slate-700 ${
                    errors.consent ? "border-red-500" : "border-gray-400"
                  }`}
                  aria-invalid={!!errors.consent}
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  {content.form.consentLabel}{" "}
                  <a
                    href={content.form.privacyLink}
                    className="underline decoration-slate-400 underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.form.privacyText}
                  </a>
                  .
                </label>
              </div>
              {errors.consent && (
                <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 text-white text-2xl font-medium rounded-lg transition ${
                  isSubmitting
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-slate-700 hover:bg-slate-800"
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Envoi…" : content.form.submitLabel}
              </button>

              <div aria-live="polite">
                {status === "success" && (
                  <p className="text-green-700 mt-4">
                    {content.form.successMsg}
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-700 mt-4">{content.form.errorMsg}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr className="border-stone-200 border-t-2" />
    </section>
  );
}
