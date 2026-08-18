import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RouteGarage",
  description: "ドライブの計画・記録・愛車管理をひとつにまとめるWebサービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
