import './globals.css'
import { Irish_Grover } from 'next/font/google'
import Header from '@/components/Header'

export const metadata = {
  title: 'Menu Kaixarranka',
  description: 'Desgusta del menú de hoy'
}

const irishGrover = Irish_Grover({ weight: '400', subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className='max-auto'>
        <Header className={irishGrover.className}/>
        {children}
      </body>
    </html>
  )
}
