import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quote',
  description: 'Life is quote',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className='container'>
          <div className="navbar">
          <Navbar/>
          </div>

          <div className='wrapper'>
          <div className='child'>
            {children}     
                 
          </div> 
          <div className='sidebar'>
            <Sidebar/>
            
          </div>         
          </div>
         
          
          <div className='footer'>
          <Footer/>
          </div>
          
        </div>      
      </body>
    </html>
  )
}
