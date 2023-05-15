import React from 'react'
import SideNav from '@/components/SideNav'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

  return (
      <div className='flex bg-footer-bg overflow-hidden h-screen w-full'>
        <SideNav />
        <div className="flex-1 overflow-y-scroll bg-base-200 p-5">
          {children}
        </div>
      </div>
  )
}

export default AdminLayout