export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    // curso nextjs desde cero nextjs13 fazt 23.48
    <html lang="en">
      <body>
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        
        {children}
      </body>
    </html>
  )
}