import { NextResponse } from "next/server";
export async function GET(resquest:Request) {
  const {searchParams} = new URL(resquest.url)
  const name = searchParams.get("name");
  const intstrument  = searchParams.get("instrument");
  return NextResponse.json({name, intstrument})
}