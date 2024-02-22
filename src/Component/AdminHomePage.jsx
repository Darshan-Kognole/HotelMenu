import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Routes,Route } from 'react-router-dom'
import AdminView from './AdminView'
import AdminAddProduct from './AdminAddProduct'
const AdminHomepage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Routes>
        <Route path='/adminview' element={<AdminView/>}/>
        <Route path='/adminaddproduct' element={<AdminAddProduct/>}/>
      </Routes>
      
    </div>
  )
}

export default AdminHomepage