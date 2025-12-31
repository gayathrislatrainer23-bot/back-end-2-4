import { useState } from "react"
import axios from 'axios'

const Registration = ()=>{
const [name, setName]= useState('')
const [email, setEmail]= useState('')
const [password, setPassword]= useState('')

const handleSubmit=async (e)=>{
   e.preventDefault()
    const formData = {
        userName: name,
        email    : email,
        password : password
    }
    try{

      const  res = await axios.post('http://localhost:5000/auth/register',formData)
        if(res.status === 200){

            alert('registration success')
        }
    }catch(err){
     alert(err.message)
    }

}

return(
    <div className="registration">

<form onSubmit={handleSubmit}>
    <input type="text" placeholder="enter name" value={name}  onChange={(e)=>setName(e.target.value)}/><br/>
    <input type="email" placeholder="enter email" value={email}  onChange={(e)=>setEmail(e.target.value)} /><br/>
    <input type="password" placeholder="enter password" value={password}  onChange={(e)=>setPassword(e.target.value)}/><br/>
    <button type="submit">Register</button>
</form>
    </div>
)
}
export default Registration