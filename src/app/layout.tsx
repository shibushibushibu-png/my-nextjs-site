import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "新事業チーム診断サービス - NEWh",
  description: "新事業開発に取り組むチームの能力を客観的に診断し、具体的なアクションプランをご提案します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
