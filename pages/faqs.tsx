import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const FAQs = () => {
  return (
    <>
        <Header />
        <section className='section mt-16 md:mt-20 md:pt-20 py-8 grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">FAQs</h1>
            <span className='font-bold'>Home / FAQs</span>
        </section>
        <section className='section pt-6 md:pt-12'>
            <div className="flex flex-col justify-center items-center text-center mb-4">
                <h1 className="text-3xl md:text-4xl font-extrabold font-argentinum mb-1 md:mb-3">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-2xl text-primary font-bold text-center">
                    How Can we Help
                </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 pb-32">
               {[0,2,34,5].map((item, index) => ( 
                <div key={item} className="flex flex-col gap-3 py-8 px-5 shadow-xl rounded-xl">
                    <h1 className="text-lg font-bold text-primary font-argentinum mb-3">How do I apply for the scholarship?</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, temporibus quaerat. Aperiam repellendus molestias consequatur? Autem aliquid atque laborum saepe iusto nemo eaque esse natus maiores, numquam corporis quod necessitatibus!</p>
                </div>
                ))}
            </div>
        </section>
        <Footer />
    </>
  )
}

export default FAQs