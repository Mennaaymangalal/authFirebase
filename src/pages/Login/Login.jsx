import { Input } from '@heroui/react'
import React from 'react'

export default function Login() {
  return (
    <>
    <div className="container">      
      <div className="md:w-2/4 m-auto py-24 px-14 border-1 shadow-md">
      <form action="">
      <div className="grid gap-4">
      <h1 className='font-bold text-2xl '>Login Now!</h1>
      <Input name='name'  label="Name" placeholder="Enter your name" type="text" variant={'underlined'} />
      <Input name='email' label="Email" placeholder="Enter your email" type="email" variant={'underlined'} />
      </div>
      </form>
      </div>     
    </div>
    </>
  )
}
