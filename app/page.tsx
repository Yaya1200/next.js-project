import React from 'react'
import '@/assets/styles/globlas.css';
import Link from 'next/link';
import {Inter, Italiana} from "next/font/google";
const inter = Inter({subsets : ['latin']})


export default function HomePage() {
 
  return (
    <div>
      <h1 className='text-3xl'>Welcome</h1>
      <Link href="/properties " className={inter.className}>Go to properties</Link>
    </div>
  )
}

