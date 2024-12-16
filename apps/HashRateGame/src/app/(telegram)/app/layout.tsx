import '../../global.css';

export const metadata = {
  title: '#HashRateGame',
  description: '#HashRateGame - Telegram mini app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
