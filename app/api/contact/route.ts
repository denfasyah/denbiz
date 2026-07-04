import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    const { name, email, message, service } = data ?? {};
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Nama tidak valid." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email tidak valid." }, { status: 400 });
    }

    // In a real application, use Resend, SendGrid, or Nodemailer here
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'contact@denbiz.agency',
    //   subject: `[DenBiz] Permintaan dari ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Service: ${service}</p><p>${message}</p>`,
    // });

    console.log("Contact form submission:", { name: name.trim(), email: email.trim(), service, message });

    return NextResponse.json(
      { message: "Pesan Anda telah terkirim." },
      {
        status: 200,
        headers: { "X-Content-Type-Options": "nosniff" },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
