"use client";

import { useRef, useEffect, useState } from "react";

// Types props
export type ReferenceItem = {
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
  author: { name: string; role: string; href: string; imageUrl: string };
  companyLogo?: string;
  companyName?: string;
};

export type ReferencesContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  items: ReferenceItem[];
};

// Logos des entreprises
const companyLogos = [
  "https://api.dicebear.com/7.x/initials/svg?seed=Entreprise+location",
  "https://api.dicebear.com/7.x/initials/svg?seed=TransLog+Suisse",
  "https://api.dicebear.com/7.x/initials/svg?seed=Electricite+Favre",
  "https://api.dicebear.com/7.x/initials/svg?seed=Servibat+Geneve",
  "https://api.dicebear.com/7.x/initials/svg?seed=TransAlp+Distribution",
  "https://api.dicebear.com/7.x/initials/svg?seed=AlpiCar+Service",
];

export default function References({
  content,
}: {
  content: ReferencesContent;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation carte
  const getCardAnimation = (index: number) => {
    if (!visible) {
      if (index % 3 === 0) return "opacity-0 -translate-x-8";
      if (index % 3 === 2) return "opacity-0 translate-x-8";
      return "opacity-0 translate-y-8";
    }
    return "opacity-100 translate-x-0 translate-y-0";
  };

  return (
    <section
      id="references"
      className="scroll-mt-28 pb-20 bg-white scroll-offset"
    >
      <div className="h-12" />
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        {/* Titre */}
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          {content.sectionTitle}
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          {content.sectionSubtitle}
        </p>

        {/* Grille */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-12 lg:max-w-7xl lg:grid-cols-3">
          {content.items.map((post, i) => (
            <article
              key={`${post.title}-${post.datetime}-${i}`}
              className={`flex max-w-xl flex-col items-start justify-between transition-all duration-700 ease-out ${getCardAnimation(
                i
              )}`}
              style={{ transitionDelay: visible ? `${150 + i * 80}ms` : "0ms" }}
            >
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              {/* Logo + nom entreprise */}
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img
                  alt=""
                  src={companyLogos[i]}
                  className="size-12 rounded bg-gray-50 object-contain"
                />
                <div className="text-base font-semibold text-gray-900">
                  {post.companyName || post.category.title}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
