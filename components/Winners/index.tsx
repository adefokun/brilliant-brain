import { IWinner } from '@/interfaces'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'

const Winners = () => {
    const [winners, setWinners] = useState<IWinner[]>([])

    useEffect(() => {
      const fetchWinners = async () => {
        try {
          const res = await fetch('/api/winners')
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setWinners(data)
        } catch (error) {
          console.log({error})
        }
       
      }
  
      fetchWinners()
    }, [])

    const position = ['First', 'Second', 'Third']
  
  return (
    <section className="section pt-20 pb-20 text-center">
    {/* <div className="flex flex-col items-center gap-4">
      <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-10">Scholarship <br /> Winners</h3>
    </div> */}
    <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-center gap-8 mb-8 text-center">      
        {winners.slice(0,3)?.map((winner, index) => (
          <div key={index} className="max-w-sm flex flex-col gap-4 items-center">
          <Image width={100} height={100} alt='' src={winner?.image} className="h-44 w-44 md:w-48 md:h-48 lg:h-72 lg:w-72 rounded-full bg-black/10" />
          <div>
            <h4 className="text-3xl font-bold">{winner?.name}</h4>
            <span className="text-[#F60707] font-extrabold">{position[Number(winner?.position) - 1]} Position</span>
          </div>
        </div>
        
        ))
        }
    </div>
  </section>
  )
}

export default Winners

// {Winners?.map((Winners, index) => (
//   <div key={index} className="flex flex-col gap-4 items-center justify-center text-center">
//       <Image width={100} height={100} alt='' src={Winners?.image} className="w-72 h-72 md:w-48 md:h-48 lg:h-72 lg:w-72 rounded-full mx-auto bg-black/10" />
//     <div>
//       <h4 className="text-[#6D6D6D] font-extrabold mb-3">{Winners?.name}</h4>
//       <span className="text-[#6D6D6D] font-extrabold">{Winners?.title}</span>
//     </div>
//   </div>
//  ))
//  }