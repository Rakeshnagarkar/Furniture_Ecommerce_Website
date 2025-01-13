import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import {FaArrowRightLong} from 'react-icons/fa6'

function FeaturedProducts() {

    const [data, setdata] = useState([])



    useEffect(() => {

        fetch('./img/Products/products.json')
        .then(res=>res.json())
        .then(data=>setdata(data.products))
        .catch(error=>console.log(error));
        
    }, [])

  return (
    <>
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 gap-3">
            {data.length > 0 && data.slice(0,6).map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
    </div>
        <div className="flex w-full justify-center">
            <button className='flex gap-2 items-center hover:text-lime-400 transition-all duration-500 ease-linear justify-center mx-auto font-bold'>view more <FaArrowRightLong/></button>
        </div>
      </>
    );
}

export default FeaturedProducts;