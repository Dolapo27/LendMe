import React, { useState } from 'react'
import './signup.css'
import {auth} from "../../config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"


const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signUp = async() => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err){
      console.error(err)
    }
  }
  return (
    <div>
      <input type="email" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
      <input type="password" placeholder='Password'onChange={(e) => {setPassword(e.target.value)} } />
      <button onClick={signUp}>Sign In</button>

    </div>
  )
}

export default Signup