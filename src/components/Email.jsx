import React from 'react'
import img from '../assets/icon.svg'

const Email = () => {
  return (
    <div className='mt-20 '>
      <div className='mb-6 items-center justify-center  text-center'>
        <div className='text-4xl items-center flex flex-col gap-10'>
            <h1 className="font-bold">please verify your Email</h1>
            <img src={img} alt="" className=" w-[10%] object-center " />
        </div>
       <div className="text-xl">
        <div>
            <p>Please verify your email address. We've sent a confirmation email to:
</p>
        </div>
        <div className='mt-2 mb-2'>
            <p className="font-bold">account@refero.design</p>

        </div>
        <div className='mb-4'>
            <p className="">
Click the confirmation link in that email to begin using Dribbble.
</p>

        </div>
        <div>
            <p className="">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <p className='text-first font-semibold'>resend the confirmation email.</p> 

</p>

        </div>
        <div className=''>
            <p className=" text-center">Wrong email address? </p><p className='text-first font-semibold' >Change it. </p>

        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Email
