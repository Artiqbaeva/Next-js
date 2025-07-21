"use client";

import Link from "next/link";
import React from "react";

const Posts = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.posts?.map((item: any) => (
        <Link
          key={item.id}
          href={`/posts/${item.id}`}
          className="block bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 p-4"
        >
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 text-sm mb-2">
            {item.body.length > 100 ? item.body.slice(0, 100) + "..." : item.body}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
