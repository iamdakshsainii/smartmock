import React from 'react'
import Header from './_components/Header'
import Footer from '@/components/Footer'

function DashboardLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
        {children}
        {/* <Footer /> */}
        </div>

    </div>
  )
}

export default DashboardLayout
