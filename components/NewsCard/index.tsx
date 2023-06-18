import React from 'react'
import { MdChevronLeft, MdArrowRight } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'

const NewsCard = ({ news }: { news: any }) => {
  return (
    <Link href={`/news/${news?._id}`}>
      <div className='flex flex-col shadow hover:shadow-lg'>
        <Image className='object-cover object-center h-32 w-full bg-' src={news.image} height={128} width={128} alt="" />
        <div className="flex flex-col p-4">
          <div className="flex flex-col h-24">
            <h2 className="text-base font-medium max-h-[70px] overflow-hidden">
              {news?.title}
            </h2>
            <div className="flex w-full justify-start gap-1 text-xs text-[#98A2B3] items-center">
              <MdChevronLeft />
              <span>4 mins read</span>
            </div>
          </div>
          <p className="text-left h-24 overflow-hidden text-sm">
            {news?.snippet}
          </p>
          <div className="flex gap-2 justify-start items-center mt-7 text-sm">
            <span className="text-green">Read More</span>
            <MdArrowRight />
          </div>
        </div>
      </div>
  </Link>
  )
}

export default NewsCard