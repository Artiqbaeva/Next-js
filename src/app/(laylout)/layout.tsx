import Header from '@/components/Header'
import React from 'react'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=' '>
        <Header/>
        {children}
    </div>
  )
}

export default Layout