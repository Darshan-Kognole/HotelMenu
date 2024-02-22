import React, { useState } from 'react'


const AdminSignUp = () => {
  let [name,setname]=useState("")  
  let [email,setemail]=useState("")
  let [password,setpasword]=useState("")
  let [phone,setphone]=useState("")
  let [profile,setprofile]=useState("")

  let admins={name,email,password,phone,profile}
  let addAdmin = (e)=>{
  e.preventDefault();
    
    fetch("http://localhost:1000/Manager",{
        method:"Post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(admins)
    })
    .then((res)=>{
        console.log(res);
        alert("Admins Added successfully")
    })
    .catch((err)=>{
        console.log("Invalid Data");
    })
    e.target.reset();
  }
  
  return (
    <div className='adminsignup'>
        <div className='sub_asu'>
            <h1>Admin SignUp</h1>
            <form onSubmit={addAdmin}>
                <label htmlFor="">
                    Admin Name: <br /><input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                </label>
                <br /><br />
                <label htmlFor="">
                    Email: <br /><input required type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} name="" id="" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Password: <br /><input required type="text" value={password} onChange={(e)=>{setpasword(e.target.value)}} name="" id="" />
                </label>
                <br /><br />
                <label htmlFor="">
                    Phone: <br /><input required type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} name="" id="" />
                </label>
                <br /><br />
                <label htmlFor="">
                    ProfileImgUrl: <br /><input required type="text" value={profile} onChange={(e)=>{setprofile(e.target.value)}} name="" id="" />
                </label>
                <br /><br />             
                <button>Register</button>
            </form>
        </div>
    </div>
  )
}

export default AdminSignUp