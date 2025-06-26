import BookButton from "../BookButton";
import Image from "next/image";

export default function Welcome() {
	return (
		<>
			<p className="mb-2">
				Ouvert à tous, tout au long de l’année, l’institut{" "}
				<span className="font-bold">L’Évasion des Sens</span> vous accueille au
				sein de l’hôtel Le Grand Large. Venez découvrir un espace dédié à la
				détente et au bien-être, que vous soyez seul(e) ou accompagné(e).
			</p>
			<div className="mb-2">
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
			<p className="mb-2">
				Chaque samedi après-midi, profitez de nos prestations bien-être en duo,
				pour un moment de complicité et de relaxation.
			</p>
			<p className="mb-3">Au plaisir de vous accueillir prochainement.</p>
			<div className="flex justify-center mb-3 h-10">
				<BookButton text="Réserver" />
			</div>
			<div className="flex justify-center">
				<Image
					src="/tables-massage.jpg"
					alt="tables massage"
					width={600}
					height={400}
					className="rounded-2xl w-auto h-auto max-h-[35vh]"
				/>
			</div>
		</>
	);
}
