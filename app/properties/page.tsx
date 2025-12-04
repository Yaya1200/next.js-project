import React from 'react';
import getallusers from '../lib/getallusers';
import Link from 'next/link';

async function PropertiesPage() {
  const data = await getallusers()

 const content = <div>
  {data.map((element:{id:number, name:string})=>{
   return <p key={element.id}>{element.name}</p>
    
  })}
 </div>
  return (
    content
  )
}

export default PropertiesPage