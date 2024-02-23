import React, {  useEffect,useState } from 'react'
import "../Style/AdminLogin.css"
import { Link, useNavigate } from 'react-router-dom'
import "./AdminSignUp.jsx"
import axios from 'axios'


const AdminLogin = () => {
  let [uname,setuname] =useState("")
  console.log(uname);
  let [password,setpasword] =useState("")
  console.log(password);
  let [admin,setadmin]=useState([])
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:1000/Manager')
    .then((res)=>{
      console.log(res.data);
      setadmin(res.data)
    })
    .catch((res)=>{
      console.log(res);
    })
  },[])
  function login(e){
    let a=false;
    e.preventDefault();
    admin.map((x)=>{
      if(uname==x.email && password==x.password){
        alert("Logged In Successfully")
        navigate('/adminhomepage')
        a=true;        
      }
    })
    if(a==false){
      alert("Invalid username or password")
    }
  }
  return (
    <div className="adminlogin">
      <div className='sub_al'>
      <h1 id='txt'>AdminLogin</h1>
        <form action="">
          <label htmlFor="">
            Admin username: <br /><input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} />
          </label>
          <br /><br />
          <label htmlFor="">
            Admin Passwowrd: <br /> <input type="text" value={password} onChange={(e)=>{setpasword(e.target.value)}}/>
          </label>
          <br />
          <button onClick={login}>Login</button>

          <p id='signlink'>Are you new to this page? <Link id='signup' to="/adminsignup">SignUp </Link></p>
        </form>
        </div>        
    </div>
  )
}
export default AdminLogin;