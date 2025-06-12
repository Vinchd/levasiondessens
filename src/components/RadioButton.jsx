"use client";
import { useState } from "react";
import Welcome from "./homediv/Welcome";
import Price from "./homediv/Price";

export default function RadioButton() {
	const [selected, setSelected] = useState("option1");

	return (
		<div className="flex flex-col items-center max-md:px-4 w-full max-w-[900px] h-full min-h-full">
			<div
				id="firstFilter"
				className="filter-switch mb-6 w-[400px] max-md:w-[80vw] h-[40px] min-h-[40px]"
			>
				<input
					id="option1"
					name="options"
					type="radio"
					checked={selected === "option1"}
					onChange={() => setSelected("option1")}
				/>
				<label className="option" htmlFor="option1">
					Accueil
				</label>
				<input
					id="option2"
					name="options"
					type="radio"
					checked={selected === "option2"}
					onChange={() => setSelected("option2")}
				/>
				<label className="option" htmlFor="option2">
					Tarifs
				</label>
				<span className="background" />
			</div>
			<div className="flex flex-grow justify-center items-center w-full overflow-hidden">
				<div className="px-5 w-full max-h-full overflow-y-auto text-[14px] max-md:text-[12px]">
					{selected === "option1" ? <Welcome /> : <Price />}
				</div>
			</div>
		</div>
	);
}
