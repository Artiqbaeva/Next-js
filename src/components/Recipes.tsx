"use client";
import Image from 'next/image';
import React from 'react';

const Recipes = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.recipes?.map((item: any) => (
        <div
          key={item.id}
          className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            className="rounded mb-4 object-cover w-full h-48"
          />
          <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
          {item.cuisine && (
            <p className="text-gray-600 text-sm mb-1">Cuisine: {item.cuisine}</p>
          )}
          {item.difficulty && (
            <p className="text-gray-600 text-sm mb-1">Difficulty: {item.difficulty}</p>
          )}
         
        </div>
      ))}
    </div>
  );
};

export default Recipes;
