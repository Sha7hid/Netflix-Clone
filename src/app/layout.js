
import './globals.css';

export const metadata = {
  title: 'Netflix Clone',
  description: 'Netflix Clone built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
