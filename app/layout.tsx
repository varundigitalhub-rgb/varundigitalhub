import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <header role="banner">
          <Navbar />
        </header>
        <main role="main">{children}</main>
        <a
          href="https://wa.me/919372787178?text=Hello%20I%20want%20a%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl hover:scale-110 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
          >
            <path d="M19.11 17.205c-.372-.186-2.203-1.086-2.544-1.21-.34-.124-.588-.186-.836.186-.248.372-.96 1.21-1.176 1.458-.216.248-.433.279-.805.093-.372-.186-1.57-.579-2.99-1.846-1.104-.984-1.848-2.199-2.064-2.571-.216-.372-.023-.573.163-.758.167-.166.372-.433.558-.65.186-.217.248-.372.372-.62.124-.248.062-.465-.031-.651-.093-.186-.836-2.016-1.145-2.763-.301-.723-.607-.625-.836-.636-.217-.01-.465-.012-.713-.012s-.65.093-.99.465c-.34.372-1.299 1.27-1.299 3.095s1.33 3.589 1.516 3.837c.186.248 2.617 3.996 6.344 5.601.887.383 1.579.612 2.118.784.89.283 1.699.243 2.338.148.713-.106 2.203-.9 2.514-1.77.31-.87.31-1.615.217-1.77-.093-.155-.34-.248-.713-.434z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
