"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Welcome from "./homediv/Welcome";
import Price from "./homediv/Price";

export default function RadioButton() {
	const [selected, setSelected] = useState("option1");
	const [direction, setDirection] = useState(1);

	const handleSelect = (option) => {
		setDirection(option === "option2" ? 1 : -1);
		setSelected(option);
	};

	const variants = {
		initial: (dir) => ({
			x: `${dir * 20}%`,
			opacity: 0,
			position: "absolute",
		}),
		animate: {
			x: 0,
			opacity: 1,
			position: "relative",
			transition: {
				duration: 0.2,
				easeInOut: [0.42, 0, 0.58, 1],
			},
		},
		exit: (dir) => ({
			x: `${dir * -20}%`,
			opacity: 0,
			position: "absolute",
			transition: {
				duration: 0.2,
				easeInOut: [0.42, 0, 0.58, 1],
			},
		}),
	};

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
					onChange={() => handleSelect("option1")}
				/>
				<label className="option" htmlFor="option1">
					Accueil
				</label>
				<input
					id="option2"
					name="options"
					type="radio"
					checked={selected === "option2"}
					onChange={() => handleSelect("option2")}
				/>
				<label className="option" htmlFor="option2">
					Tarifs
				</label>
				<span className="background" />
			</div>
			<div className="relative flex flex-grow justify-center items-center w-full overflow-hidden">
				<AnimatePresence custom={direction} mode="wait">
					<motion.div
						key={selected}
						custom={direction}
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="px-5 w-full max-h-full overflow-y-auto text-[14px] max-md:text-[12px]"
					>
						{selected === "option1" ? <Welcome /> : <Price />}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
