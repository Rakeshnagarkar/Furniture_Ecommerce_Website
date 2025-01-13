import React from 'react'
import ProductList from '../components/shop/ProductList'
import Newsletter from '../components/Newsletter'

function Shop() {
  return (
    <>
    <div className='w-full h-full flex flexcol justify-center items-center'>
        <div className='w-11/12 '>
            <ProductList />
        </div>
    </div>
    <div className='w-11/12 py-5'>
        <Newsletter/>
        
    </div>
    </>
  )
}

export default Shop