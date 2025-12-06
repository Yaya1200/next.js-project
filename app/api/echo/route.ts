import { NextResponse } from "next/server";
export async function GET(resquest:Request) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return NextResponse.json(result)
}