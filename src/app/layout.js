import './globals.css'

export const metadata = {
  title: 'Menu Kaixarranka',
  description: 'Desgusta del menú de hoy'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
