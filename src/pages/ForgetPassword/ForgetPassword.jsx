import { Button, Input } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
 
  return (
    <>
    <div className="container md:w-2/5 m-auto">      
      <div className="  py-5 px-10 border-1 shadow-md">
      <form action="">
      <div className="grid gap-4">
      <h1 className='font-bold text-2xl '>Reset Your Password</h1>
      <Input name='email'  label="Email" placeholder="Enter your email" type="email" variant={'underlined'} />
    

      <Button className='mt-4' color="primary">Reset Password</Button>
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
