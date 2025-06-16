import BookButton from "@/components/BookButton";

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
				<div className="w-full">
					<form className="space-y-4 max-md:space-y-2 bg-white shadow-md mx-auto p-6 border-2 border-primary rounded-4xl max-w-2xl">
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
									placeholder="0x xx xx xx xx"
									pattern="^(0|\+33)[1-9](?:[ .-]?\d{2}){4}$"
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
								className="bg-primary hover:bg-[#c5a58c] shadow px-6 py-2 rounded-full text-secondary tracking-wider transition duration-200"
							>
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
