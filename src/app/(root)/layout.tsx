import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
   
    <main className='root'>
{/** Sidebar */}
<Sidebar/>
{/** Mobile Nav */}
<MobileNav/>

        <div className='root-container'>
            <div className='wrapper'>
                {children}
            </div>
        </div>
        
    </main>
   
  )
}

export default Layout