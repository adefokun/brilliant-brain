import React from 'react'
import Logo from "@/assets/logo.jpg"
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {

  return (
      <footer className=''>
        <div className='py-12 md:py-20 px-8 md:px-10 lg:px-32 sm:flex justify-between grad-to-right text-white'>
            <div>
              <h4 className='text-2xl font-bold mb-5'>Company</h4>
              <ul className='text-lg text-footer-gray flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='text-2xl font-bold mb-5'>Company</h4>
              <ul className='text-lg text-footer-gray flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='text-2xl font-bold mb-5'>Company</h4>
              <ul className='text-lg text-footer-gray flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
            <div>
              <h4 className='text-2xl font-bold mb-5'>Company</h4>
              <ul className='text-lg text-footer-gray flex flex-col gap-2'>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Career</li>
                <li>News/Updates</li>
              </ul>
            </div>
          </div>
          <section className="section py-6">
          <div className="flex items-center gap-7">
            <Link href={"/"}>
              <Image src={Logo} className='w-20 h-16' alt=''></Image>
            </Link>
            <p className="font-bold text-xl">
              BRILLIANT BRAIN SCHOLARSHIP 2023
            </p>
          </div>
        </section>
      </footer>
  )
}

export default Footer