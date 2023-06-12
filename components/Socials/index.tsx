import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { AiOutlineClose, AiOutlineWhatsApp, AiOutlineLinkedin } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsReddit, BsPinterest } from 'react-icons/bs'

const Socials = () => {
    const [link, setLink]  = React.useState(`https://www.discoverpathway.com/claim/$text=Claim%20Your%20Name&via=dev_Nickj&id=`)
    
  return (
          <div className='flex flex-col md:flex-row justify-center gap-4 rounded-md text-white'>
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://twitter.com/share?url=${link}`}>
                <FaTwitter className='text-base' />
                Twitter

            </a>
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://www.instagram.com/?url=${link}`}>
                <FaInstagram className='text-base' />
                Instagram
            </a>
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg relative' href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}>
              <FaFacebookF className='text-base' />
                Facebook
            </a>
            {/* whatsapp  */}
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://api.whatsapp.com/send?text=${link}`}>
                <AiOutlineWhatsApp className='text-lg' />
                Whatsapp
            </a>
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://telegram.me/share/url?url=${link}&text=Claim%20Your%20Name`}>
                <FaTelegramPlane className='text-base' />
                Telegram
            </a>
            {/* telegram, pinterest, linkedIn, Reddit */}
            {/* <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://www.reddit.com/submit?url=${link}&title=Claim%20Your%20Name`}>
                <BsReddit className='text-base' />
                Reddit
            <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=Claim%20Your%20Name&summary=&source=`}>
                <AiOutlineLinkedin className='text-base' />
                LinkedIn
            </a>
            {/* <a className='flex gap-3 items-center p-2 px-3 border rounded-lg' href={`https://www.pinterest.com/pin/create/button/?url=${link}&media=&description=Claim%20Your%20Name`}>
                <BsPinterest className='text-base' />
                Pinterest
            </a> */}
          </div>
          
  )
}

export default Socials