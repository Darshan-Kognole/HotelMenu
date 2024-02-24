import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../Style/AdminView.css'
import StarIcon from '@mui/icons-material/Star';

const AdminView = () => {
  let[data,setdata]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:1000/Product")
    .then((res)=>{
      console.log(res.data);
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <div className='Addminviewpage'>
       {data.map((x)=>{
        return(
          <div key={x.id} className='displayproduct'>
            <div className='img'>
              <img src={x.turl} alt="" />
            </div>
            <div className='restaurant'>
              <h5>{x.Rstname} </h5>
              <h4>{x.rating} <StarIcon id="star"/></h4>
            </div>
              <h2 className='dname'>{x.Dname}</h2>
          </div>
          
        )
       })}
    </div>
  );
}

export default AdminView