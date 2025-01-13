import React from 'react'

function OfferBanners() {
  return (
    <div className='w-full h-full flex justify-center gap-3 items-center flex-col sm:flex-row md:flex-row'>
        <div className="flex-1 relative">
            <div>
                <img src="./img/Hero_banner/01.jpg" className='w-full h-full object-cover' alt="banner" />
            </div>
            <div className='absolute bottom-4 p-3'>
                <h1 className='text-[clamp(1em,2.5vw,3em)] font-semibold'>Exclusive Deal:</h1>
                <h1 className='text-[clamp(1em,3vw,4em)] font-semibold'>Save Big On Stylish Chairs!</h1>
            </div>
        </div>
        <div className="flex-1 relative">
            <div>
                <img src="./img/Hero_banner/04.jpg" className='w-full h-full object-cover' alt="banner" />
            </div>
            <div className='absolute top-4 left-4 p-3 flex flex-col'>
                {/* Limited Time Offer comes above Get Cozy */}
                <h1 className='text-[clamp(1em,2.5vw,3em)] font-semibold'>Limited Time Offer:</h1>
                <h1 className='text-[clamp(1em,3vw,4em)] font-semibold'>Get Cozy With Discounted Sofas!</h1>
            </div>
        </div>
    </div>
  )
}

export default OfferBanners
