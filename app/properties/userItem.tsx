"use client";

import { useState } from "react";
import getData from "../lib/getdata";

export default function UserItems({ id, name }: { id: number; name: string }) {
  const [post, setPost] = useState<{
    userId: number
    id: number;
    title: string;
    body: string;
  } | null>(null);

  const handleCheck = async () => {
    const result = await getData({id});
    setPost(result);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={handleCheck}>{name}</button>
      {post &&  
    <div key={post.id}>
    <p>{post.title}</p>
    <p>{post.body}</p>
    </div>
  }
</div>
  );
}
