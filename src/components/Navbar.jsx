import Link from "next/link";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="top-0 fixed bg-primary py-4 w-full h-28 max-md:h-[90px]">
			<div className="flex items-center mx-auto px-12 max-md:px-5 h-full">
				<Link href="/" className="flex items-center mr-auto h-full">
					<Image
						src="/evasion-des-sens-logo.png"
						alt="Logo Evasion des Sens"
						width={101}
						height={59}
						className="w-auto h-full object-contain"
					/>
				</Link>
				<div className="flex items-center gap-5 max-md:gap-2 md:mr-7 h-full">
					<Link
						href="/contact"
						className="flex items-center px-3 max-md:px-1 h-full hover:text-secondary hover:underline underline-offset-3 transition duration-200"
					>
						Contact
					</Link>
					<a
						href="https://www.instagram.com/levasiondes.sens/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center px-3 max-md:px-1 h-full hover:text-secondary transition duration-200"
					>
						<AiFillInstagram className="w-8 h-8" />
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100067921822699"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center px-3 max-md:px-1 h-full hover:text-secondary transition duration-200"
					>
						<FaFacebookSquare className="w-7 h-7" />
					</a>
				</div>
			</div>
		</nav>
	);
}
