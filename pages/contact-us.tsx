import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ContactImg from '@/assets/contact.png'

const ContactUs = () => {
  return (
    <>
        <Header />
        <section className='section mt-20 pt-20 py-8 grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-5xl font-extrabold text-white font-argentinum mb-3">Contact Us <br /> Address</h1>
            {/* <span className='font-bold'>Home / Contact Us</span> */}
        </section> 
        <section className="section flex flex-col md:flex-row gap-3 pt-20 pb-20">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-between w-full">
                <div className="flex-1 flex flex-col gap-4">
                    <Image src={ContactImg} alt="" className="h-40 w-full max-w-sm mb-8" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Office Address</h3>
                        <p className="text-sm text-[#6D6D6D] font-medium">Office Address:<br /> Off Brilliant Brain Avenue, <br /> Brilliant Brain Estate</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Phone Number</h3>
                        <div className="text-sm text-[#6D6D6D] font-medium flex flex-col">
                            <span>+234 000 000 0000</span>
                            <span>+234 000 000 0000</span>
                            <span>+234 000 000 0000</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Email/Website Address</h3>
                        <div className="text-sm text-[#6D6D6D] font-medium flex flex-col">
                            <a href="www.nick.com" className="hover:text-primary">
                                www.nicholas.com
                            </a>
                            <a href="mailto:nic" className="hover:text-primary">
                                info@nic.org
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col p-4 md:p-10 bg-white rounded-xl shadow-lg">
                    <h1 className="text-lg font-bold text-gray-800 font-argentinum mb-3">SEND US A MESSAGE</h1>
                    <form className="flex flex-col gap-4 mt-4">
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className="text-xs font-bold text-black">Full Name</label>
                            <input type="text" placeholder="name" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className="text-xs font-bold text-black">Email</label>
                            <input type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message" className="text-xs font-bold text-black">Message</label>
                            <textarea rows={5} cols={10} id='message' placeholder="message" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <Button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-hover focus:bg-primary-hover focus:outline-none">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ContactUs