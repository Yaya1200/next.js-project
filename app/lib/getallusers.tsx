import React from 'react'

export default async function getallusers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("there is error in fetching the data");
  return(
   response.json()
  )
  
}
