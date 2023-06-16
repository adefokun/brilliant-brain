import { IAdvisory } from '@/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Advisory = ({advisory} : {advisory: IAdvisory[]}) => {
    // const [advisory, setAdvisory] = useState<IAdvisory[]>([])

    // useEffect(() => {
    //   const fetchAdvisory = async () => {
    //     try {
    //       const res = await fetch('/api/advisory')
    //       const data = await res.json()
    //       if (!res.ok) {
    //         throw new Error(data?.message || 'An error Occured')
    //       }
    //       setAdvisory(data)
    //     } catch (error) {
    //       console.log({error})
    //     }
    //   }
  
    //   fetchAdvisory()
    // }, [])

    // console.log({advisory})
  
  return (
      <section className="section py-12 md:py-20 text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-10">Advisory Board <br /> Members</h3>
        </div>
        <div className="flex flex-col gap-10 md:gap-16">
          {advisory?.map((advisory, index) => (
            <div key={index} className="flex flex-col gap-4 md:gap-12 md:flex-row">
              <div className='flex flex-col gap-4 items-center justify-center text-center md:text-left md:items-start flex-[1_1_0%]'>
                  <Image width={100} height={100} alt='' src={advisory?.image} className="h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 rounded-full mx-auto md:rounded-none object-cover md:mx-0 bg-black/10" />
                <div>
                  <h4 className="text-sm mb-3">{advisory?.name}</h4>
                  <span className="text-[#6D6D6D] text-sm font-extrabold">{advisory?.title}</span>
                </div>
              </div> 
              <div className='text-[#6D6D6D] font-argentinum text-sm md:text-base md:text-left flex-[3_1_0%]' dangerouslySetInnerHTML={{ __html: advisory?.description }}  />    
            </div>
          ))
          }
        </div>
    </section>
  )
}

export default Advisory
