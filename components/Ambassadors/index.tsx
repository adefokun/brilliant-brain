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
    <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto mb-12 text-center">
       <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Our <br /> Ambassadors</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo recusandae necessitatibus voluptas nobis voluptatum nesciunt incidunt facilis, a provident dicta repudiandae ratione mollitia fuga deleniti! Alias explicabo aliquid repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus adipisci qui ratione excepturi unde inventore aspernatur. Accusamus numquam, officia laboriosam similique nemo repellat libero consequatur eum minima quas doloremque. </p>
     </div>
     <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
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
       {/* <div className="max-w-sm flex flex-col gap-4 justify-center">
         <Image src={JohnDoe1} alt="" className="h-72 w-72 rounded-full" />
         <div>
           <h4 className="text-3xl font-bold">John Doe</h4>
           <span className="text-primary font-bold text-xl">Lorem Ileum</span>
         </div>
       </div>
       <div className="max-w-sm flex flex-col gap-4 justify-center">
         <Image src={JohnDoe2} alt="" className="h-72 w-72 rounded-full" />
         <div>
           <h4 className="text-3xl font-bold">John Doe</h4>
           <span className="text-primary font-bold text-xl">Lorem Ileum</span>
         </div>
       </div>
       <div className="max-w-sm flex flex-col gap-4 justify-center">
         <Image src={JohnDoe3} alt="" className="h-72 w-72 rounded-full" />
         <div>
           <h4 className="text-3xl font-bold">John Doe</h4>
           <span className="text-primary font-bold text-xl">Lorem Ileum</span>
         </div>
       </div> */}
     </div>
   </section>
  )
}

export default Ambassadors