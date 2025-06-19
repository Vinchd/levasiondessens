import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "L'Évasion des Sens",
	description:
		"Institut de beauté, massages, soins esthétiques l'Évasion des sens à la Bernerie en Retz",
	keywords: [
		"institut de beauté",
		"massage",
		"soins esthétiques",
		"bien-être",
		"épilation",
		"La Bernerie-en-Retz",
		"L'Évasion des Sens",
	],
	creator: "Vincent Daviaud",
	publisher: "Vincent Daviaud",
	openGraph: {
		title: "L'Évasion des Sens",
		description:
			"Institut de beauté, massages, soins esthétiques l'Évasion des sens à la Bernerie en Retz",
		siteName: "L'Évasion des Sens",
		locale: "fr_FR",
		images: [
			{
				url: "/evasion-des-sens-logo.png",
				width: 1200,
				height: 630,
				alt: "Institut de beauté L'Évasion des Sens à La Bernerie-en-Retz",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr" className="h-full">
			<body
				className={`${poppins.className} antialiased flex min-h-full flex-col`}
			>
				<Navbar />
				<main className="flex justify-center bg-secondary pt-28 max-md:pt-[90px] h-[calc(100vh-8rem)] grow">
					{children}
				</main>
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
