
import React from 'react'

export default async  function getData({id}:{id:number}) {
  const userData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if(!userData.ok){
    throw new Error("there is an error fetching data")
  }
  const allData = await userData.json();

  return (
      allData
    
    )
  
}
