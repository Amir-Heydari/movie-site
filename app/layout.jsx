import Link from 'next/link'
import './globals.css'
import FcAbout from 'react-icons/fc'

export const metadata = {
  title: 'Amovie',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <div className='flex justify-center font-bold uppercase'>
       <div className='flex justify-evenly px-24 shadow-lg w-full'>
          <div className='p-6 mx-10 '><Link href="/">HOME</Link></div>
          <div className='p-6 mx-10 '><button className='hover:text-blue-900' href="/">Geners</button></div>
          <div className='p-6 mx-10 '><Link href="/">Top 100</Link></div>
          <div className='p-6 mx-10 '><Link href="/">Country</Link></div>
          <div className='p-6 mx-10 '><Link href="/">Contact us</Link></div>
        </div>
       </div>
        {children}
        </body>
    </html>
  )
}
