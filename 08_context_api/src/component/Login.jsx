import {useState,useContext} from 'react'
import usercontext from '../context/usercontext'


function Login() {
    const [userName,setUsername]= useState('')
    const [password,setpassword]=useState('')
    const {setUser}= useContext(usercontext)
    const handleSubmit =(e)=>{
      e.preventDefault()
      setUser({userName,password})


    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text'
      value={userName}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='Username'/>
      {" "}
      <input type='Password' 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='Password'/>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
