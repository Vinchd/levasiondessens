import nodemailer from "nodemailer";

export async function POST(req) {
	const { name, email, message, phone } = await req.json();

	if (!name || !email || !message) {
		return new Response("Champs manquants", { status: 400 });
	}

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: process.env.EMAIL_TO,
		subject: "Nouveau message depuis votre site",
		replyTo: email,
		text: `Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}\n` : ""}
Message:
${message}`,
		html: `
		<p><strong>Nom:</strong> ${name}</p>
		<p><strong>Email:</strong> ${email}</p>
		${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
		<p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
	`,
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response("Message envoyé", { status: 200 });
	} catch (error) {
		console.error("Erreur d'envoi", error);
		return new Response("Erreur serveur", { status: 500 });
	}
}
