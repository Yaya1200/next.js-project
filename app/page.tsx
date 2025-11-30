import React from 'react'
import '@/assets/styles/globlas.css';

import { metadata } from './layout';
const { title, description } =  metadata;

export default function HomePage() {
  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  )
}

