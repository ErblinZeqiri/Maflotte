import { privacyEN } from "@/content/privacy.en";

export default function PrivacyPolicyEN() {
  const c = privacyEN;
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white flex items-center justify-center">
      <section className="max-w-2xl w-full mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <p className="text-sm text-slate-500 mb-2">{c.legal}</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{c.title}</h1>
          <p className="text-base text-slate-700 mb-2">{c.intro}</p>
          <p className="mt-2 text-sm text-slate-500">{c.updated}</p>
        </div>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-lg">
          <div className="prose prose-slate max-w-none text-slate-800">
            {c.sections.map((section, i) => (
              <div key={i}>
                <h3>{section.heading}</h3>
                {section.text && <p>{section.text}</p>}
                {section.list && (
                  <ul>
                    {section.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.heading === "Controller" && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 mb-4">
                    <div className="font-medium text-slate-900">{c.company.name}</div>
                    <div>
                      Email:{" "}
                      <a className="underline" href={`mailto:${c.company.email}`}>
                        {c.company.email}
                      </a>
                    </div>
                    <div>Address: {c.company.address}</div>
                  </div>
                )}
                {section.heading === "Your rights" && (
                  <a className="underline" href={`mailto:${c.company.email}`}>
                    {c.company.email}
                  </a>
                )}
                {section.heading === "Contact" && (
                  <a className="underline" href={`mailto:${c.company.email}`}>
                    {c.company.email}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {c.company.name}
          </div>
        </article>
      </section>
    </main>
  );
}