import '../styles/globals.css';
import  Header  from '@/sections/Header';
import  Footer  from '@/sections/Footer';

export const metadata = {
  title: 'Aussie Globe',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
