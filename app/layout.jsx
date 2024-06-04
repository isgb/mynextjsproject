
import NavBar from "../components/Navbar";
import {
  Roboto
} from 'next/font/google';
import "./globals.css"

export const metadata = {
  title: "mi tienda con NextJs - Homepage",
  description: 'Esta es la página principal de mi tienda.',
  keywords: "tienda, online, ecommerce"
}

const roboto = Roboto({
  weight: ["300","400","500","700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    // curso nextjs desde cero nextjs13 fazt 23.48
    <html lang="en">
      <body className={roboto.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
