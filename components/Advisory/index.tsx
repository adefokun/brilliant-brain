import { IAdvisory } from '@/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Advisory = () => {
    const [advisory, setAdvisory] = useState<IAdvisory[]>([])

    useEffect(() => {
      const fetchAdvisory = async () => {
        try {
          const res = await fetch('/api/advisory')
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setAdvisory(data)
        } catch (error) {
          console.log({error})
        }
      }
  
      fetchAdvisory()
    }, [])

    console.log({advisory})
  
  return (
      <section className="section mb-32 text-center">
      <div className="flex flex-col items-center gap-4">
      <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-10">Advisory Board <br /> Members</h3>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-8">
      {advisory?.map((advisory, index) => (
        <div key={index} className="flex flex-col gap-4 items-center justify-center text-center">
            <Image width={100} height={100} alt='' src={advisory?.image} className="h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 rounded-full mx-auto bg-black/10" />
          <div>
            <h4 className="text-[#6D6D6D] font-extrabold mb-3">{advisory?.name}</h4>
            <span className="text-[#6D6D6D] font-extrabold">{advisory?.title}</span>
          </div>
        </div>
       ))
       }
      </div>
    </section>
  )
}

export default Advisory