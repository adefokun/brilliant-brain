import { IAmbassador } from '@/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Ambassadors = () => {
    const [ambassadors, setAmbassadors] = useState<IAmbassador[]>([])

    useEffect(() => {
      const fetchAmbassadors = async () => {
        try {
          const res = await fetch('/api/ambassadors')
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setAmbassadors(data)
        } catch (error) {
          console.log({error})
        }
        
      }
  
      fetchAmbassadors()
    }, [])
  
    // console.log({ambassadors})
  return (
    <section className="section pt-20 pb-20 text-center">
      <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Our <br /> Ambassadors</h3>
        <p>We are delighted to introduce our exceptional scholarship ambassadors, a group of outstanding individuals who have distinguished themselves through their remarkable achievements and unwavering commitment to excellence. Chosen from a pool of highly talented applicants, these scholars have demonstrated exceptional academic prowess, leadership abilities, and a strong dedication to their communities. </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 pt-12">
        {ambassadors?.map((ambassador, index) => (
          <div key={index} className="max-w-sm flex flex-col gap-4 justify-center">
            <Image width={100} height={100}  src={ambassador?.image} alt="" className="h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 rounded-full bg-black/10" />
            <div>
              <h4 className="text-3xl font-bold">{ambassador?.name}</h4>
              <span className="text-primary font-bold text-xl">{ambassador?.title}</span>
            </div>
          </div>
        ))
        }
    </div>
   </section>
  )
}


export default Ambassadors