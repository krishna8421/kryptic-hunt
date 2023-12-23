import mailGun from "mailgun.js";
import formData from "form-data";
import { env } from "@/env";
import jwt from "jsonwebtoken";

export const convertToInitials = (fullName: string) => {
  return fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join(" ");
};

interface ISendConfirmationEmail {
  email: string;
  name: string;
  verificationCode: string;
}

export const sendConfirmationEmail = async ({
  email,
  name,
  verificationCode,
}: ISendConfirmationEmail) => {
  const MailGun = new mailGun(formData);

  const mg = MailGun.client({
    username: "api",
    key: env.MAILGUN_API_KEY,
  });
  const DOMAIN = "mailgun.mlsakiit.com";

  const data = {
    from: `MLSA, KIIT Chapter <kryptichunt@mlsakiit.com>`,
    to: email,
    subject: "Verify Your Email | Kryptic Hunt MLSA",
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <h1 style="text-align: center; color: #1a1a1a;">Verify Your Email</h1>
      <p style="text-align: center; color: #1a1a1a;">Hi ${name},</p>
      <p style="text-align: center; color: #1a1a1a;">Thanks for registering for Kryptic Hunt 2023. Please verify your email by clicking the button below.</p>
      <div style="text-align: center;">
        <a href="https://kryptic-hunt.mlsakiit.com/api/auth/confirm?code=${verificationCode}" style="background-color: #1a1a1a; color: #fff; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a>
      </div>
      <p style="text-align: center; color: #1a1a1a;">Regards,<br />MLSA, KIIT Chapter</p>
    `,
  };

  const mailRes = await mg.messages.create(`${DOMAIN}`, data);

  return mailRes;
};

export const generateVerificationCode = (email: string) => {
  return jwt.sign({ email }, env.NEXTAUTH_SECRET, {
    expiresIn: "30d",
  });
};
