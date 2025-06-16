import BookButton from "@/components/BookButton";
import ContactForm from "@/components/ContactForm";

export default function page() {
	return (
		<div className="flex justify-center mt-6 w-full">
			<div className="flex flex-col gap-5 max-md:px-4 w-full max-w-[900px] min-h-full max-h-full overflow-auto">
				<div className="text-center tracking-wider">
					Une question ? Besoin d’un conseil ou d’une information sur nos
					prestations ? Laissez-nous un message, nous vous répondrons avec
					plaisir dans les plus brefs délais. <br /> Vous pouvez rapidement et
					simplement prendre rendez-vous sur&nbsp;
					<a
						href="https://www.planity.com/levasion-des-sens-44760-la-bernerie-en-retz"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold text-primary hover:text-gray-800 underline"
					>
						Planity
					</a>
				</div>
				<BookButton text="Réserver en ligne" />
				<ContactForm />
			</div>
		</div>
	);
}
