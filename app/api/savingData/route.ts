import { NextResponse } from "next/server";

export async function POST() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "helloworld",
      content: "hello world from another world",
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
