"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const phoneRegex = /^(0|\+33)[1-9](?:[\s.-]?\d{2}){4}$/;

		if (form.phone && !phoneRegex.test(form.phone)) {
			toast.error("Format de téléphone invalide");
			setLoading(false);
			return;
		}

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		});

		setLoading(false);

		if (res.ok) {
			toast.success("Message envoyé !");
			setForm({ name: "", email: "", phone: "", message: "" });
		} else {
			toast.error("Erreur lors de l'envoi.");
		}
	};

	return (
		<div className="w-full">
			<Toaster position="bottom-center" />

			<form
				onSubmit={handleSubmit}
				className="space-y-4 max-md:space-y-2 bg-white shadow-md mx-auto p-6 border-2 border-primary rounded-4xl max-w-2xl"
			>
				<h2 className="font-medium text-sm text-center tracking-wider">
					Formulaire de contact
				</h2>
				<div>
					<label
						htmlFor="name"
						className="block ml-2 font-medium text-gray-700 text-sm"
					>
						Nom*
					</label>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Votre nom"
						title="Champ obligatoire"
						required
						className="mt-1 px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-[#bd9c83] focus:ring-2 w-full text-sm"
					/>
				</div>

				<div className="gap-4 grid grid-cols-2 max-md:grid-cols-1">
					<div>
						<label
							htmlFor="email"
							className="block ml-2 font-medium text-gray-700 text-sm"
						>
							Email*
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={form.email}
							onChange={handleChange}
							placeholder="exemple@gmail.com"
							title="Champ obligatoire"
							required
							className="mt-1 px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-[#bd9c83] focus:ring-2 w-full text-sm"
						/>
					</div>

					<div>
						<label
							htmlFor="phone"
							className="block ml-2 font-medium text-gray-700 text-sm"
						>
							Téléphone
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={form.phone}
							onChange={handleChange}
							placeholder="0x xx xx xx xx"
							pattern="^/^(0|\+33)[1-9](?:[\s.-]?\d{2}){4}$/"
							className="mt-1 px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-[#bd9c83] focus:ring-2 w-full text-sm"
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block ml-2 font-medium text-gray-700 text-sm"
					>
						Message*
					</label>
					<textarea
						name="message"
						id="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Votre message"
						title="Champ obligatoire"
						required
						rows={5}
						className="mt-1 px-4 py-2 border border-primary rounded-lg focus:outline-none focus:ring-[#bd9c83] focus:ring-2 w-full text-sm"
					/>
					<p className="mr-6 font-extralight text-xs text-right italic tracking-tighter">
						* Champ obligatoire
					</p>
				</div>

				<div className="text-center">
					<button
						type="submit"
						disabled={loading}
						className="bg-primary hover:bg-[#c5a58c] shadow px-6 py-2 rounded-full text-secondary tracking-wider transition duration-200"
					>
						{loading ? "Envoi..." : "Envoyer"}
					</button>
				</div>
			</form>
		</div>
	);
}
