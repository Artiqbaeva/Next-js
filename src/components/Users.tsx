"use client";
import Link from 'next/link';
import React from 'react';

const Users = ({ data }: { data: any }) => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.users?.map((item: any) => (
        <Link  key={item.id} 
          href={`/users/${item.id}`}
          className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-4 flex flex-col"
        >
        <div
         
          
        >
          <h2 className="text-lg font-semibold mb-2">
            {item.firstName} {item.lastName}
          </h2>
          <p className="text-gray-600 text-sm mb-1">Username: {item.username}</p>
          <p className="text-gray-600 text-sm mb-1">Email: {item.email}</p>
          <p className="text-gray-600 text-sm mb-1">Gender: {item.gender}</p>
          <p className="text-gray-600 text-sm mb-1">Age: {item.age}</p>
          <p className="text-gray-600 text-sm mb-1">Phone: {item.phone}</p>
          <p className="text-gray-600 text-sm mb-1">City: {item.address?.city}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Users;
