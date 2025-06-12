import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center gap-12 w-full">
			<Image
				src="/evasion-des-sens-logo.png"
				alt="Logo Evasion des Sens"
				width={101}
				height={59}
				className="w-1/12 object-contain"
			/>
			<div>Page non trouvée</div>
			<Link
				href="/"
				className="bg-primary hover:bg-[#c5a58c] px-12 py-2 rounded-3xl w-fit font-semibold text-[16px] text-secondary tracking-wider"
			>
				Retour à l'accueil
			</Link>
		</div>
	);
}
