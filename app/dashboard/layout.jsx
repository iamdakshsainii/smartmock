import React from 'react'
import Header from './_components/Header'
import Footer from '@/components/Footer'

function DashboardLayout({children}) {
  return (
    <div>
      <Header/>
      <div className='mx-6 md:mx-20 lg:mx-36'>
        {children}
      </div>
      {/* Uncomment if you want footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default DashboardLayout
