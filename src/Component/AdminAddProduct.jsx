import React, { useState } from 'react'
import '../Style/AdminAddProduct.css'
import axios from 'axios'
const AdminAddProduct = () => {
  let[category,setcategory]=useState("")
  let[Rstname,setRstname]=useState("")
  let[Dname,setDname]=useState("")
  let[price,setprice]=useState("")
  let[qty,setqty]=useState("")
  let[desp,setdesp]=useState("")
  let[turl,setturl]=useState("")
  let[rating,setrating]=useState("")
  let data={category,Rstname,Dname,price,qty,desp,turl,rating}
  let addDish=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:1000/Product",data) 
    .then((res)=>{
      console.log(res);
      alert("Dish added successfully")
    })
    .catch((err)=>{
      console.log(err);
      alert("Error adding dish")
    })
  }
  return (
    <div className='addproduct'><h1> Add Product Form</h1>
      <form className='form' onSubmit={addDish}>
        <label htmlFor="">
          Category: <select value={category} onChange={(e)=>{setcategory(e.target.value)}} type="text">
            <option >Starters</option>
            <option >veg</option>
            <option >Starters</option>
            <option >Non-veg</option>
            <option >Sea-Food</option>
            <option >Breads</option>
            <option >Chienies</option>
            <option >Breverages</option>
            <option >Deserts</option>
          </select>
        </label>
        <br />
        <label className='l1'>
          Restaurant Name : <input type="text" value={Rstname} onChange={(e)=>{setRstname(e.target.value)}} placeholder='Enter restaurant name' />
        </label>
        <br />
        <label htmlFor="">
          Dish Name: <input type="text" value={Dname} onChange={(e)=>{setDname(e.target.value)}} placeholder='Enter dish name'/>
        </label>
        <br />
        <label htmlFor="">
          Price: <input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}} placeholder='Enter the Cost Price'/>
        </label>
        <br />
        <label htmlFor="">
          Quantity: <input type='text' value={qty} onChange={(e)=>{setqty(e.target.value)}}/>
        </label>
        <br />
        <label htmlFor="">
          Description : <textarea type="text" value={desp} onChange={(e)=>{setdesp(e.target.value)}} placeholder='Enter the special recipies' rows="2" />
        </label>
        <br />
        <label htmlFor="">
          thumbnailUrl: <input type="text" value={turl} onChange={(e)=>{setturl(e.target.value)}} placeholder='Enter image Url'/>
        </label>
        <br />
        <label htmlFor="">
          Ratings: <input type="number" value={rating} onChange={(e)=>{setrating(e.target.value)}}/>
        </label>
        <br />
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default AdminAddProduct