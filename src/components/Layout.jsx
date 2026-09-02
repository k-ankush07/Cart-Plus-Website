import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#000000]">
      <Header />
      <div className='absolute top-0 w-full'>
        <img src="https://cartplus.io/cartplus-img/Group 1707480308.svg" alt="cart plus" className='w-full' />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
