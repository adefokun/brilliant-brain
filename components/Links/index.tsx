import Link from 'next/link'
import React from 'react'
import Button  from '../Button'
import { signIn, signOut, useSession } from 'next-auth/react'


const Links = ({ isOpen }: { isOpen: boolean }) => {

  return (
    <div className={`md:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white text-black px-4  py-2 md:px-10 z-30 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}>
          <nav className="md:hidden flex flex-col gap-16 p-4 pt-20 px-8 mb-8">
            <ul className='flex flex-col text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
              <li><Link href="/about-us" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Scholarship</Link></li>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Winners</Link></li>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Ambassadors</Link></li>
              <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Available Scholarship</Link></li>
              <li><Link href="/contact-us" className={`pb-1.5 px-1 font-medium`}>Contact Us</Link></li>
              <li><Link onClick={() => signIn()} href="/login" className={`pb-1.5 px-1 font-medium`}>Login</Link></li>
              {/* {!user ? 
              <li><Link href="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
                :
                <li>
                  <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                    Logout
                  </div>
                </li>
              } */}
            </ul>
            <Link href="/register">
              <Button className={`py-2 pb-2.5 px-6 text-xs font-medium text-white bg-primary rounded-full`}>
                Sign Up
              </Button>
          </Link>
          </nav>
        </div>
  )
}

export default Links