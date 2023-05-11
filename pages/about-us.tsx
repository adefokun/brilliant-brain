import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import About2 from '@/assets/about1.png'
import About1 from '@/assets/about2.png'

const AboutUs = () => {
  return (
    <>
        <Header />
        <section className='section mt-16 md:mt-20 md:pt-20 py-8 grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">About Us</h1>
            <span className='font-bold'>Home / About Us</span>
        </section>
        <section className='section pt-12 pb-10 relative after:absolute after:translate-y-6 after:bottom-0 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white'>
            <h1 className="text-2xl text-primary font-bold font-argentinum py-3">
                The Brilliant Brain Scholarship Scheme
            </h1>
        </section>
        <section className="section py-20 bg-primary text-white">
            <div className="flex flex-col md:flex-row gap-12 mb-20">
                <div className="flex-1 relative md:-top-20">
                    <Image src={About1} alt="" className="w-full max-w-sm" />
                </div>
                <div className="flex-1 max-w-lg flex flex-col gap-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 max-w-lg flex flex-col gap-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                </div>
                <div className="flex-1 flex justify-end">
                    <Image src={About2} alt="" className="w-full max-w-sm" />
                </div>
            </div>
        </section>
        <section className="section flex flex-col gap-3 pt-20 pb-20 relative after:absolute after:top-0 after:-translate-y-6 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white">
            {[0,1,2,3,4].map(el => (
                <p key={el}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi sapiente assumenda sed? Nulla esse laudantium, deserunt totam molestiae eveniet quia illo voluptatem consectetur, fugit, culpa doloribus ad iusto cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque tempora sequi! Nisi deserunt placeat velit hic sapiente amet similique accusantium, ipsum at consequatur, earum explicabo tenetur. Provident, reiciendis tempore.</p>
            ))}
        </section>
        <Footer />
    </>
  )
}

export default AboutUs