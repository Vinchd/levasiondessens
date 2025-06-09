export default function RadioButton() {
	return (
		<div className="flex flex-col items-center bg-cyan-200">
			<div
				id="firstFilter"
				className="filter-switch mb-6 w-[400px] max-md:w-[80vw] h-[50px]"
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
			<div className="px-30">
				Ouvert à tous tout au long de l'année, l'institut L'Évasion des sens est
				implanté au sein de l'hôtel le Grand large. Je vous invite à venir
				découvrir un univers de détente seul ou en duo.
			</div>
		</div>
	);
}
