import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const postId = 5;

const response = await fetch(`/api/savingData?id=${postId}`, {
  method: "DELETE",
});


  const data = await response.json(); 

  return NextResponse.json({
    message: `Post with ID ${postId} deleted (fake)`,
    data
  });
}
