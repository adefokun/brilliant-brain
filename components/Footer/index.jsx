import React from 'react'
import Logo from "@/assets/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {

  return (
      <footer className=''>
        <div className='py-12 md:py-20 section grid grid-cols-2 gap-12 md:grid-cols-4 grad-to-right text-white'>
            <div>
              <h4 className='md:text-lg font-extrabold mb-3'>Company</h4>
              <ul className='text-footer-gray text-sm flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='md:text-lg font-extrabold mb-3'>Resources</h4>
              <ul className='text-footer-gray text-sm flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='md:text-lg font-extrabold mb-3'>Legal</h4>
              <ul className='text-footer-gray text-sm flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='md:text-lg font-extrabold mb-3'>Social Media</h4>
              <ul className='text-footer-gray text-sm flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
          </div>
          <section className="section py-3">
            <div className="flex items-center gap-7">
              <Link href={"/"}>
                <Image src={Logo} className='w-20 h-16' alt=''></Image>
              </Link>
              <p className="font-extrabold text-sm md:text-xl">
                BRILLIANT-BRAIN SCHOLARSHIP 2023
              </p>
            </div>
          </section>
      </footer>
  )
}

export default Footer