"use client"
import { useState } from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './about/profile/navbar'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div>Hello World</div> */}
        <Navbar></Navbar>
        <h1>Layout {state}</h1>
        <button onClick={() => setState(state + 1)}>Klik untuk Layout</button>
        {children}
      </body>
    </html>
  )
}
