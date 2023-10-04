import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App Task',
  description: 'Just a simple task',
}

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={inter.className}>
      <Header />
      <Sidebar />
      <div className={'w-100 h-100'}>
        {children}
      </div>
      </body>
    </html>
  )
}
