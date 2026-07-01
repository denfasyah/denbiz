import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // In a real application, you would use Resend, SendGrid, or Nodemailer here
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@denbiz.com',
    //   subject: 'New Contact Request',
    //   html: `<p>Name: ${data.name}</p>...`
    // });

    console.log("Received contact form submission:", data);

    return NextResponse.json(
      { message: "Successfully sent message." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
