
import { useState } from 'react'
const Login = () => {

  const[isSignin, setIsSignin]=useState(true)

  const isSigninToggle=() => {
    setIsSignin(!isSignin)
  }
  return (
    <div className='flex justify-center'>
      <div className='absolute'>
        <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="" />
      </div>

      <div className='z-30 absolute my-35'>
        <h1 className='text-white font-bold text-7xl'>Unlimited movies, <br/>TV shows and more</h1>
      </div>  

      <form className='absolute w-3/12 p-12 bg-black text-white  my-80 mx-auto left-0 right-0 rounded'>
        <h1 className='text-3xl font-bold my-2'>{isSignin?"Sign In":"Sign Up"}</h1>
        {!isSignin && <input type="text" placeholder='Full Name' className='p-2 m-2 w-full'/>}
        <input type='email' placeholder='Email or phone number'  className='p-2 m-2 w-full'/>
        <input type='password' placeholder='Password' className='p-2 m-2 w-full' />
        <button type='submit' className='p-2 my-4 bg-red-600 w-full rounded cursor-pointer'>{isSignin?"Sign In":"Sign Up"}</button>
        <p className='py-3 cursor-pointer' onClick={isSigninToggle}>New to netflix? SignUp now</p>
      </form>
    </div>
  )
}

export default Login