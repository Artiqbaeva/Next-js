"use client";
import React from 'react';

const Products = ({data}:{data: any}) => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.products?.map((item:any) => (
        <div 
          key={item.id}
          className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
        >
          <img 
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 text-sm mb-1">Category: {item.category}</p>
          <p className="text-gray-600 text-sm mb-1">Brand: {item.brand}</p>
          <p className="text-green-600 font-bold mb-2">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
