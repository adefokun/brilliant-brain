import Button from '@/components/Button'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import RegisterImg from '@/assets/register.png'
import Image from 'next/image'



const Register = () => {
    const [success, setSuccess] = React.useState(true)

    
  return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen pb-12">
            <section className="section pt-20 md:pt-28 w-full">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full">
                    <div className="flex-1 flex flex-col-reverse justify-center items-center md:items-start md:flex-col md:justify-between text-center md:text-left">
                        <div>
                            <p className="md:text-4xl">
                                <span className="text-primary font-bold">Welcome to </span>
                                <span className="text-gray-800 font-bold font-argentinum">Argentinum</span>
                            </p>
                            <p className='hidden md:block'>Lorem ipsum, dolor sit amet consectetur, Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                        {/* <h1 className="text-4xl font-bold text-gray-800 font-argentinum mb-3 text-center md:hidden">Sign Up</h1> */}
                        <Image src={RegisterImg} alt="" className="w-32 h-24 md:w-full md:h-auto" /> 
                    </div>
                    <div className="flex-1 flex flex-col p-4 md:p-10 bg-[#F2F2F2] rounded-xl shadow-md w-full">
                        <h1 className="text-3xl font-bold text-gray-800 font-argentinum mb-3 md:mb-7">Register</h1>
                        <form className="flex flex-col gap-2 md:gap-4 text-xs">
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
                            <Button gradient='grad-to-top' className="px-4 py-3 text-sm font-bold text-white rounded-md hover:bg-primary-hover focus:bg-primary-hover focus:outline-none">Register</Button>
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

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: "aaaaa",
            password: "aaaaa",
            username: "aaaaa",
            confirm_password: "aaaaa"
        })
    })

    const data = await res.json()
    console.log("data login", data)
    return {
        props: {
            title: "Login",
            data
        }
    }
}

export default Register