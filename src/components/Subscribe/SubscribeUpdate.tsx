import React from 'react'
import subIcon from '@/../public/photos/Icon.png'
import Image from 'next/image'
function SubscribeUpdate() {
  return (
    <div className='flex items-center justify-center mt-36 mb-20'>
        <div className=''>
            <div className='flex items-center justify-center'>
            <Image  src={subIcon} alt='subscribe'></Image>
            </div>
            <div className='flex  flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl mt-5 font-bold'>Subscribe For the latest updates</h1>
                <p>Subscribe to newsletter and never miss the new post every week.</p>
                <div className='flex gap-x-2'>
                <input className='rounded p-4 ' placeholder='Enter your mail...' type="text" />
                <button className='bg-blue-500 px-5 py-4 rounded-lg text-white font-bold'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscribeUpdate