import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const AboutUs = () => {
  return (
    <>
        <Header />
        <section className='section mt-20 pt-20 py-8 grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-5xl font-extrabold text-white font-argentinum mb-3">About Us</h1>
            <span className='font-bold'>Home / About Us</span>
        </section>
        <section className='section pt-12 pb-10'>
            <h1 className="text-2xl text-primary font-bold font-argentinum py-3">
                The Brilliant Brain Scholarship Scheme
            </h1>
        </section>
        <section className="section py-20 bg-primary text-white">
            <div className="flex flex-col md:flex-row gap-12 mb-20">
                <div className="flex-1 bg-gray-100"></div>
                <div className="flex-1 flex flex-col gap-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 flex flex-col gap-3">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam obcaecati, aspernatur nisi nobis impedit quisquam nihil error assumenda dolorum! Dolorem delectus expedita, illo voluptas est distinctio optio! Eveniet, deserunt.</p>
                </div>
                <div className="flex-1 bg-gray-100"></div>
            </div>
        </section>
        <section className="section flex flex-col gap-3 pt-20 pb-20">
            {[0,1,2,3,4].map(el => (
                <p key={el}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi sapiente assumenda sed? Nulla esse laudantium, deserunt totam molestiae eveniet quia illo voluptatem consectetur, fugit, culpa doloribus ad iusto cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque tempora sequi! Nisi deserunt placeat velit hic sapiente amet similique accusantium, ipsum at consequatur, earum explicabo tenetur. Provident, reiciendis tempore.</p>
            ))}
        </section>
        <Footer />
    </>
  )
}

export default AboutUs