import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 640) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Empêche les erreurs côté serveur
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		handleResize(); // appel initial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isMobile;
}
