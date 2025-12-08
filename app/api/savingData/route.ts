import { NextResponse } from "next/server";

export async function DELETE(req:Request) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get("id")

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  
   
  });

  const data = await response.json();

  return NextResponse.json(data);
}
