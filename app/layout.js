import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "James Serengia | Personal profile",
  description:
    "Senior Full-stack Software Engineer | MERN stack, TypeScript, Next Js, Ruby & Ruby on Rails, React Native",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
