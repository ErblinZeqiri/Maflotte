"use client";

import { useRef, useEffect, useState } from "react";

const posts = [
	{
		id: 1,
		title: "Un gain de temps considérable",
		href: "#",
		description:
			"Grâce à MAFLOTTE, nous avons pu centraliser tous nos véhicules, y compris ceux en location courte durée. La gestion est fluide et nous gagnons un temps précieux au quotidien.",
		date: "Mai 2025",
		datetime: "2025-05-01",
		category: { title: "GVA CARS", href: "#" },
		author: {
			name: "Nicolas Berisha",
			role: "Directeur Général",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
		},
	},
	{
		id: 2,
		title: "Une solution claire et efficace",
		href: "#",
		description:
			"Nous gérons une trentaine de véhicules utilitaires, et MAFLOTTE nous a permis d’y voir beaucoup plus clair. Les rappels automatiques et les rapports sont top.",
		date: "Avril 2025",
		datetime: "2025-04-01",
		category: { title: "TransLog Suisse", href: "#" },
		author: {
			name: "Claire Dupuis",
			role: "Responsable logistique",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/women/45.jpg",
		},
	},
	{
		id: 3,
		title: "Idéal pour une PME comme la nôtre",
		href: "#",
		description:
			"Interface simple, support réactif, prix honnête. On recommande MAFLOTTE à toutes les entreprises locales qui veulent digitaliser leur gestion de flotte.",
		date: "Mars 2025",
		datetime: "2025-03-01",
		category: { title: "Electricité Favre SA", href: "#" },
		author: {
			name: "Yvan Favre",
			role: "Co-gérant",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
		},
	},
	{
		id: 4,
		title: "Adapté à tous nos véhicules",
		href: "#",
		description:
			"Qu’il s’agisse de nos camionnettes, de nos véhicules de chantier ou même des scooters de livraison, tout est intégré dans une seule interface. Super pratique.",
		date: "Février 2025",
		datetime: "2025-02-01",
		category: { title: "Servibat Genève", href: "#" },
		author: {
			name: "Laura Perret",
			role: "Responsable d’exploitation",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
		},
	},
	{
		id: 5,
		title: "Un onboarding rapide et intuitif",
		href: "#",
		description:
			"Nous avons mis en place la solution en moins d’une semaine. Même nos chauffeurs trouvent l’interface facile à utiliser sur mobile.",
		date: "Janvier 2025",
		datetime: "2025-01-01",
		category: { title: "TransAlp Distribution", href: "#" },
		author: {
			name: "Julien Martin",
			role: "Chef de flotte",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
		},
	},
	{
		id: 6,
		title: "La meilleure plateforme qu’on ait testée",
		href: "#",
		description:
			"On a essayé plusieurs outils avant de tomber sur MAFLOTTE. Le rapport qualité-prix et la stabilité de la plateforme font la différence.",
		date: "Décembre 2024",
		datetime: "2024-12-01",
		category: { title: "AlpiCar Service", href: "#" },
		author: {
			name: "Sophie Blanc",
			role: "Assistante administrative",
			href: "#",
			imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
		},
	},
];

export default function References() {
	// Animation d'apparition
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold: 0.3 }
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	// Animation pour chaque carte selon sa colonne
	const getCardAnimation = (index: number) => {
		if (!visible) {
			if (index % 3 === 0) return "opacity-0 -translate-x-8"; // gauche
			if (index % 3 === 2) return "opacity-0 translate-x-8"; // droite
			return "opacity-0 translate-y-8"; // centre
		} else {
			return "opacity-100 translate-x-0 translate-y-0";
		}
	};

	return (
		<section
			id="references"
			className="scroll-mt-28 pb-20 px-4 sm:px-6 md:px-8 bg-white scroll-offset"
		>
			<div
				ref={sectionRef}
				className={`max-w-7xl mx-auto transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0 delay-[100ms]" : "opacity-0 -translate-y-8"}
        `}
			>
				<div className="mx-auto max-w-2xl lg:mx-0 mb-0">
					<h2
						className={`text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl transition-all duration-700 ease-out ${
							visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
						}`}
					>
						Nos références
					</h2>
					<p
						className={`mt-2 text-lg/8 text-gray-600 transition-all duration-700 ease-out ${
							visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
						}`}
					>
						Des clients satisfaits.
					</p>
				</div>
				<div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{posts.map((post, i) => (
						<article
							key={post.id}
							className={`flex max-w-xl flex-col items-start justify-between transition-all duration-700 ease-out
                ${getCardAnimation(i)}
                ${visible ? `delay-[${150 + i * 80}ms]` : ""}
              `}
							style={{
								transitionDelay: visible ? `${150 + i * 80}ms` : "0ms",
							}}
						>
							<div className="flex items-center gap-x-4 text-xs">
								<time dateTime={post.datetime} className="text-gray-500">
									{post.date}
								</time>
								<a
									href={post.category.href}
									className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
								>
									{post.category.title}
								</a>
							</div>
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
							<div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
								<img
									alt=""
									src={post.author.imageUrl}
									className="size-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm/6">
									<p className="font-semibold text-gray-900">
										<a href={post.author.href}>
											<span className="absolute inset-0" />
											{post.author.name}
										</a>
									</p>
									<p className="text-gray-600">{post.author.role}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
