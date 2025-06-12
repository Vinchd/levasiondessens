import useIsMobile from "../../lib/useIsMobile";

export default function Price() {
	const isMobile = useIsMobile();

	const services = [
		{
			subtitle: "Épilations",
			services: [
				{ name: "1/2 jambes", price: 17 },
				{ name: "Cuisses", price: 19 },
				{ name: "3/4 jambes", price: 22 },
				{ name: "Jambes complètes", price: 31 },
				{ name: " Maillot ou aisselles", price: 10 },
				{ name: "Maillot échancré", price: 17 },
				{ name: "Maillot intégral", price: 28 },
				{ name: "Bras", price: 17 },
				{ name: "1/2 jambes + aisselles ou maillot", price: 26 },
				{ name: "1/2 jambes + aisselles + maillot", price: 32 },
				{ name: "Jambes complètes + maillot", price: 37 },
				{ name: "Jambes complètes + maillot + aisselles", price: 43 },
				{ name: "Lèvre ou menton", price: 7 },
				{ name: "Sourcils", price: 9 },
				{ name: "Soucils + lèvre + menton", price: 19 },
				{ name: "Joues", price: 4 },
				{ name: "Visage complet", price: 25 },
				{ name: "Torse", price: 15 },
				{ name: "Dos", price: 18 },
			],
		},
		{
			subtitle: "Soins visage",
			services: [
				{ bold: "Nu Skin" },
				{ name: "Soins visage fermeté 75’", price: 75 },
				{ name: "Soin d'entretien 45’", price: 45 },
				{ name: "Cure 5 séances 45’", price: 180 },
				{ name: "Soin éclat 60’", price: 55 },
				{ bold: "Folies Royales BIO" },
				{ name: "Soins visage 60’", price: 49 },
				{ name: "Soin jeune 45’", price: 40 },
			],
		},
		{
			subtitle: "Beauté",
			services: [
				{ name: "Maquillage", price: 25 },
				{ name: "Maquillage + essai", price: 35 },
				{ name: "Teinture cils ou soucils", price: 15 },
				{ name: "Teinture cils + soucils", price: 22 },
			],
		},
		{
			subtitle: "Massages",
			services: [
				{ name: "Réflexologie plantaire 30’", price: 35 },
				{ name: "Massage visage et cuir chevelu 30’", price: 35 },
				{ name: "Massage du dos 30’", price: 35 },
				{ name: "Massage détente 50’", price: 55 },
				{ name: "Californien 60’", price: 72 },
				{ thin: "doux et relaxant" },
				{ name: "Suédois 60’", price: 72 },
				{ thin: "profond et décontractant" },
				{ name: "Balinais 60’", price: 72 },
				{ thin: "énergisant" },
				{ name: "Lomi-Lomi 60’", price: 72 },
				{ thin: "profond et dynamique" },
				{ name: "Pierre chaudes 60’", price: 72 },
				{ thin: "reminéralisant et relaxant" },
				{ name: "Ayurvédique 60’", price: 72 },
				{ thin: "drainant et rééquilibrant" },
				{ name: "L’Evasion 90’", price: 99 },
				{ thin: "massage à l'huile chaude personnalisé" },
			],
		},
		{
			subtitle: "Soins des ongles",
			services: [
				{ name: "Beauté des main 45’", price: 40 },
				{ name: "Beauté des pieds 45’", price: 40 },
				{ name: "Pose de vermis classique", price: 10 },
				{ name: "Pose de vernis semi-permanent - Dépose", price: 10 },
			],
		},
		{
			subtitle: "Duos",
			services: [
				{ name: "Massage duo 60’", price: 139 },
				{ name: "Massage duo 90’", price: 199 },
				{ name: "Evasion duo 90’", price: 195 },
				{ thin: "gommage, balnéo duo, massage" },
				{ name: "Rituel bien-être 1’45", price: 239 },
			],
		},
		{
			subtitle: "Spécifiques",
			services: [
				{ name: "Balnéothérapie 1pers. 20’", price: 39 },
				{ name: "Balnéothérapie 2pers. 20’", price: 70 },
				{ name: "Soins jambes légères 60’", price: 59 },
				{ name: "Soin décontractant du dos 60’", price: 59 },
				{ name: "Gommage corps 30’", price: 26 },
				{ name: "Application argile des Moutiers 20’", price: 29 },
			],
		},
		{
			subtitle: "Evasions",
			services: [
				{ name: "Evasion bien-être 90’", price: 95 },
				{ thin: "gommage, enveloppement, massage, détente" },
				{ name: "Avec Balnéothérapie 120’", price: 139 },
				{ name: "Evasion vitalité 90’", price: 95 },
				{ thin: "gommage, enveloppement, massage tonifiant" },
				{ name: "Avec Balnéothérapie 120’", price: 139 },
				{ name: "Evasion des sens 210’", price: 189 },
				{ thin: "Massage, beauté des mains et des pieds et soin visage éclat" },
			],
		},
	];

	const columns = [
		[services[0], services[6]],
		[services[3], services[4], services[7]],
		[services[1], services[2], services[5]],
	];

	const columnsMobile = [
		[services[0], services[3], services[6]],
		[services[1], services[2], services[4], services[5], services[7]],
	];

	const currentColumns = isMobile ? columnsMobile : columns;

	return (
		<div className="flex flex-wrap -mx-4 max-md:-mx-8">
			{currentColumns.map((column) => {
				const colKey = column.map((c) => c.subtitle).join("-");
				return (
					<div key={colKey} className="px-4 w-1/3 max-sm:w-1/2">
						{column.map((category) => (
							<div
								key={category.subtitle}
								className="mb-6 max-md:mb-1 text-[9px] max-md:text-[7.5px]"
							>
								<h2 className="mb-1 font-semibold text-[12px]">
									{category.subtitle}
								</h2>
								<ul className="space-y-0">
									{category.services.map((service, index) => (
										<li
											key={`${category.subtitle}-${service.name || service.bold || service.thin}-${index}`}
										>
											{service.name && service.price !== undefined ? (
												<div className="flex items-center">
													<span>{service.name}</span>
													<span className="flex-grow mx-2 border-gray-400 border-b border-dotted" />
													<span>{service.price}€</span>
												</div>
											) : service.bold ? (
												<div className="font-semibold">{service.bold}</div>
											) : service.thin ? (
												<div className="mb-0.5 text-gray-500 italic leading-none tracking-tighter">
													{service.thin}
												</div>
											) : null}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
}
/* Animation au changement de sous page*/
/* Animation au changement de sous page*/
/* Animation au changement de sous page*/
/* Animation au changement de sous page*/
