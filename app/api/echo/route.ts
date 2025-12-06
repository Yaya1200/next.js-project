import { NextResponse } from "next/server";
export async function GET(resquest:Request) {
  const {searchParams} = new URL(resquest.url)
 const obj = Object.fromEntries(searchParams.entries())
  return NextResponse.json(obj)
}