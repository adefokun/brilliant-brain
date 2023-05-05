import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    const [success, setSuccess] = React.useState(true)

    
  return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen">
            <section className="section mb-32 pt-32">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                    <div className="flex-1 flex flex-col gap-4">
                        <p className="md:text-lg mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education </p>
                    </div>
                    <div className="flex-1 flex flex-col p-4 md:p-10 bg-[#F2F2F2] rounded-xl shadow-md">
                        <h1 className="text-3xl font-bold text-gray-800 font-argentinum mb-3">Register</h1>
                        <form className="flex flex-col gap-4 mt-4 text-xs">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-xs font-semibold text-gray-500">Email Address</label>
                                <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="username" className="text-xs font-semibold text-gray-500">Username</label>
                                <input type="text" placeholder="username" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-xs font-semibold text-gray-500">Password</label>
                                <input type="password" placeholder="Password" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className="text-xs font-semibold text-gray-500">Confirm Password</label>
                                <input type="password" placeholder="Password" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                            </div>
                            <Button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-hover focus:bg-primary-hover focus:outline-none">Register</Button>
                            <Link href="/login" className="text-xs hover:underline">
                                Already have an account? Login
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
           
        </div>
    </div>
  )
}

export default Register