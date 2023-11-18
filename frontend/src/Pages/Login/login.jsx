import React,{useCallback, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"

export default function Login() {
  const navigate = useNavigate()
  const [userval,setuserval] = useState('')
  const [passval,setpassval] = useState('')


  const HandleSubmitEvent = useCallback(()=>{
    console.log(userval,passval)
    if(userval==="teacher@adukator.com" && passval==='123'){
      navigate(`/teacher/dashboard`);
    }
    else if(userval==="student@adukator.com" && passval==='123'){
      navigate(`/student/dashboard`);
    }
    else{
      alert("Incorrect Username and Password")
      setuserval('')
      setpassval('')
    }
}, [navigate,userval,passval])

  return (
    <div>
      <div className='login-logo'></div>
      <h1 className='login-heading'>Welcome to Adikator</h1>
    
        <div className='login-body'>
            <div className='login-img'></div>
            <div className='login-form'>
                <h2 style={{width:"100%",textAlign:"center",marginLeft:"-0.5cm"}}>Login for your<br/>account</h2>
                <p>Username</p>
                <input type="text" value={userval} onChange={(e)=>setuserval(e.target.value)} id='username' />

                <p>Password</p>
                <input type="text" value={passval} onChange={(e)=>setpassval(e.target.value)} id='password' />
                <br />
                <input type="checkbox" name="" id="remember" />
                <label htmlFor="remember" style={{fontSize:"14px"}}>Remember me</label>
                <span style={{marginLeft:"4cm",fontSize:"14px",cursor:"pointer"}}>Forgot Password?</span>

                <button type="submit" className='loginbut' onClick={HandleSubmitEvent}>Login</button>

                <p style={{color:"#8B8B8B"}}>Dont have an account... <span style={{color:"#009dff",cursor:"pointer"}}>Register Now</span></p>
            </div>
        </div>
    </div>
  )
}
