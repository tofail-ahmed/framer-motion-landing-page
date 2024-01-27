import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/ui/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  // const [sidebar,setSidebar]=useState(false)
  return (
    <div className='grid grid-cols-12'>
      <Sidebar></Sidebar>
     <div className='bg-red-200/90 col-span-10 h-[300vh]'>
     <Outlet></Outlet>
     </div>
    </div>
  )
}

export default AdminLayout