import React from 'react'
import Link from 'next/link'
import { MdTrendingUp, MdPersonOutline, MdOutlinePersonOutline } from 'react-icons/md'
import { RiBillLine, RiAdvertisementLine } from 'react-icons/ri'
import Logo from "@/assets/logo.jpg"
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"


const SideNav = ({ }) => {

  return (
    <div className='hidden sm:flex flex-col justify-between grad-to-bottom text-white h-screen min-w-[240px] w-60 pb-4 overflow-hidden'>
        <div>
            <div className='w-full flex flex-col items-center gap-8 py-8 border-b border-white/10'>
                <Link href={"/"}>
                    <Image src={Logo} className='w-12 h-12 md:h-12' alt='' />
                </Link>
                <div className="flex items-center text-xs gap-2">
                    <span className='w-6 h-6 bg-white/30'>
                    </span>
                    <div className="flex flex-col text-xs">
                        <span className=''>Nicholas Duadei</span>
                        <span className='text-white/80 text-[10px]'>Nicholas@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 pt-4 text-white/70'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2`} href="/users">
                    {/* <span className='w-4 h-4 bg-white flex justify-center items-center rounded border'>
                        <MdTrendingUp color='#000000' size={"0.6rem"} />
                    </span>  */}
                    <RiAdvertisementLine size={"1.3rem"} />
                    Dashboard
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2`} href={"/users/billboard"}>
                    <RiAdvertisementLine size={"1.3rem"} />
                    Post
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 text-white`} href={"/users/billboard"}>
                    <RiAdvertisementLine size={"1.3rem"} />
                    Settings
                </Link>
            </div>
        </div>
        <div onClick={() => signOut()} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
            <RiAdvertisementLine size={"1.3rem"} />
            Logout
        </div>
    </div>
  )
}

export default SideNav