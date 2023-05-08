import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import LockImg from '@/assets/lock.png'
import Image from 'next/image'

const Login = () => {
    
  return (

    <div>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen pb-12">
            <section className="section pt-20 md:pt-28 w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full">
                    {/* <div className="flex-1 flex flex-col justify-between gap-4">
                        <p className="md:text-lg mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education </p>
                        <Image src={LockImg} alt="" className="" />
                    </div> */}
                    <div className="flex-1 flex flex-col-reverse justify-center items-center md:items-start md:flex-col md:justify-between text-center md:text-left">
                        <div>
                            <p className="md:text-4xl">
                                <span className="text-primary font-bold">Welcome to </span>
                                <span className="text-gray-800 font-bold font-argentinum">Argentinum</span>
                            </p>
                            <p className='hidden md:block'>The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education </p>
                        </div>
                        {/* <h1 className="text-4xl font-bold text-gray-800 font-argentinum mb-3 text-center md:hidden">Sign In</h1> */}
                        <Image src={LockImg} alt="" className="w-32 h-24 md:w-full md:h-auto" /> 
                    </div>
                    <div className="flex-1 flex flex-col p-4 md:p-10 bg-[#F2F2F2] rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold text-gray-800 font-argentinum mb-3">Login</h1>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 mt-4">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-xs font-semibold text-gray-500">Username or Email</label>
                                <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-xs font-semibold text-gray-500">Password</label>
                                <input type="password" placeholder="Password" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className='w-4 h-4 bg-white border border-1'></span>
                                <span className='text-xs text-black/70'>Remember me</span>
                            </div>
                            <Button onClick={() => console.log("login")} gradient='grad-to-top' className="px-4 py-3 text-sm font-bold text-white rounded-md hover:bg-primary-hover focus:bg-primary-hover focus:outline-none">Login</Button>
                            <Link href="/register" className="text-xs hover:underline">
                                Dont have an account? Register
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
           
        </div>
    </div>
  )
}

export default Login