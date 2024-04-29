import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <>
    <h1> Login</h1>
    <input 
    type = "text"
    placeholder='email'
    value = {username}
    onChange={(e) =>setUsername(e.target.value)}
    />

    <input 
    type = "password"
    placeholder='password'
    value = {setPassword}
    onChange={(e) =>setPassword(e.target.value)}
    />

    <button onClick={handleSubmit}> Submit </button>

    </>
  )
}

export default Login
