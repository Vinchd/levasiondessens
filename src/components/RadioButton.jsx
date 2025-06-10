import Image from "next/image";

export default function RadioButton() {
	return (
		<div className="flex flex-col items-center bg-cyan-200 max-md:px-4 w-full max-w-[900px] h-full min-h-full">
			<div
				id="firstFilter"
				className="filter-switch mb-6 w-[400px] max-md:w-[80vw] h-[40px] min-h-[40px]"
			>
				<input defaultChecked id="option1" name="options" type="radio" />
				<label className="option" htmlFor="option1">
					Accueil
				</label>
				<input id="option2" name="options" type="radio" />
				<label className="option" htmlFor="option2">
					Tarifs
				</label>
				<span className="background" />
			</div>
			<div className="px-5 w-full h-full overflow-y-auto text-[14px] max-md:text-[12px]">
				<p className="mb-3">
					Ouvert à tous, tout au long de l’année, l’institut L’Évasion des Sens
					vous accueille au sein de l’hôtel Le Grand Large. Venez découvrir un
					espace dédié à la détente et au bien-être, que vous soyez seul(e) ou
					accompagné(e).
				</p>
				<div className="mb-3">
					Nos prestations :
					<ul>
						<li className="before:left-0 before:absolute relative pl-4 before:content-['-']">
							Un spa avec balnéothérapie et sauna
						</li>
						<li className="before:left-0 before:absolute relative pl-4 before:content-['-']">
							Un large choix de massages bien-être
						</li>
						<li className="before:left-0 before:absolute relative pl-4 before:content-['-']">
							Des soins esthétiques personnalisés
						</li>
					</ul>
				</div>
				<p className="mb-3">
					Chaque samedi après-midi, profitez de nos prestations bien-être en
					duo, pour un moment de complicité et de relaxation.
				</p>
				<p className="mb-3">Au plaisir de vous accueillir prochainement.</p>
				<div className="flex justify-center">
					<Image
						src="/tables-massage.jpg"
						alt="tables massage"
						width={600}
						height={400}
						className="rounded-2xl w-auto h-auto max-h-[40vh]"
					/>
				</div>
			</div>
		</div>
	);
}
