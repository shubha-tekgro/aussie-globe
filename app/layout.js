import '../styles/globals.css';

export const metadata = {
  title: 'AussieGlobe',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}