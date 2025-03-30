import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "WhatsApp Login",
    description: "Scan QR code to log in to WhatsApp Web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
