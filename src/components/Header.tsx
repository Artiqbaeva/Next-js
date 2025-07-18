import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='h-20 bg-gray-200 text-black  flex items-center gap-4 px-10'>
      <div className='container flex items-center justify-between gap-6'>
         <div>
           <h2>Header</h2>
         </div>
         <div className='flex gap-6'>
             <Link href={"/products"}>Products</Link>
             <Link href={"/recipes"}>Recipes</Link>
             <Link href={"/users"}>Users</Link>
             <Link href={"/posts"}>Posts</Link>
             <Link href={"/login"}>Login</Link>
         </div>
      </div>
    </div>
  )
}

export default React.memo(Header)