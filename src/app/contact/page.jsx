import BookButton from "@/components/BookButton";
import ContactForm from "@/components/ContactForm";

export default function page() {
	return (
		<div className="flex justify-center mt-4 w-full max-md:text-[12px] text-sm">
			<div className="flex flex-col gap-4 my-auto max-md:px-4 pb-4 w-full max-w-[900px] max-h-full overflow-auto">
				<div className="text-center tracking-wider">
					Une question ? Besoin d’un conseil ou d’une information sur nos
					prestations ? Laissez-nous un message, nous vous répondrons avec
					plaisir dans les plus brefs délais. <br /> Vous pouvez rapidement et
					simplement prendre rendez-vous sur&nbsp;
					<a
						href="https://www.planity.com/levasion-des-sens-44760-la-bernerie-en-retz"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-primary hover:text-gray-800 underline transition duration-200"
					>
						Planity
					</a>
				</div>
				<div className="flex justify-center h-10">
					<BookButton text="Réserver en ligne" />
				</div>
				<div className="flex flex-col items-center leading-4">
					<p>
						Tel :{" "}
						<a
							href="tel:+33636180561"
							className="text-primary hover:text-[#c5a58c] transition duration-200"
						>
							06 36 18 05 61
						</a>
					</p>
					<p>
						Email :{" "}
						<a
							href="mailto:evasiondessens44@gmail.com"
							className="text-primary hover:text-[#c5a58c] transition duration-200"
						>
							evasiondessens44@gmail.com
						</a>
					</p>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}
