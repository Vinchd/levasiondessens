export default function BookButton({ text }) {
	return (
		<div className="flex justify-center mb-3 h-10">
			<a
				href="https://www.planity.com/levasion-des-sens-44760-la-bernerie-en-retz"
				target="_blank"
				rel="noopener noreferrer"
				className="bg-primary hover:bg-[#c5a58c] px-12 py-2 rounded-3xl w-fit font-semibold text-[16px] text-secondary tracking-wider transition duration-200"
			>
				{text}
			</a>
		</div>
	);
}
