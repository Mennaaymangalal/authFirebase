import { Alert, Button, Input } from '@heroui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contects/AuthContextProvider';

export default function ForgetPassword() {

  const [error , setError] = useState("")
  const [loading , setLoading] = useState(false)
 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
 
 
 const {resetPassword } = useAuth()
 const handleSubmit = async (e) => {
   e.preventDefault();    
    
   try {    
     setError("");
     setLoading(true);
     await resetPassword(email);
     setMessage("Check your Email to Get Your New Password")
       
   } catch (err) {   
     setError("Failed to Reset Password" + err.message);
   }
   setLoading(false);
 };
 
 
  return (
    <>
    <div className="container md:w-2/5 m-auto">      
      <div className="  py-5 px-10 border-1 shadow-md">
      <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
      <h1 className='font-bold text-2xl '>Reset Your Password</h1>
      {error && <Alert color='danger'>{error}</Alert>}
      {message && <Alert color='success'>{message}</Alert>}
      <Input  value={email}  onChange={(e) => setEmail(e.target.value)} name='email'  label="Email" placeholder="Enter your email" type="email" variant={'underlined'} />
    

      <Button disabled={loading} type='submit' className='mt-4' color="primary">Reset Password</Button>
      </div>
      </form>   
      <div className="pt-4">
       <Link className='text-blue-700 underline' to={'/'}>Login</Link>
      </div>     
      </div> 
      <div className="pt-4">
        Need an account? <Link className='text-blue-700 underline' to={'/signup'}>Register</Link>
      </div>    
    </div>
    </>
  )
}
