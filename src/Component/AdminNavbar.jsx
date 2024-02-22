import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/AdminNavbar.css'

const AdminNavbar = () => {
  return (
    <div className='AdminNavbar'>
        <div className="logo">
            <h1>Food<span>Cart</span></h1>
            <div className="options" id='op'>
                <Link to="/adminhomepage/adminview" id='l1'>View</Link>
                <Link to="/adminhomepage/adminaddproduct" id='l2'>Add Product</Link>
            </div>    
        </div>
    </div>
  )
}

export default AdminNavbar