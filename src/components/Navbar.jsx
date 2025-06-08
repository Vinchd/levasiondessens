import Link from "next/link";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="top-0 fixed bg-primary w-full">
			<div className="flex items-center mx-auto px-12 py-4">
				<Link href="/" className="mr-auto">
					<Image
						src="/evasion-des-sens-logo.png"
						alt="Logo Evasion des Sens"
						width={151}
						height={109}
					/>
				</Link>
				<Link href="/contact">Contact</Link>
				<a
					href="https://www.instagram.com/levasiondes.sens/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillInstagram className="w-14 h-14" />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=100067921822699"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookSquare className="w-13 h-13" />
				</a>
			</div>
		</nav>
	);
}
