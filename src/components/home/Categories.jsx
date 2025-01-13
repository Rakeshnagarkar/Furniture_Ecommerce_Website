import React, { useEffect, useState } from 'react'

function Categories() {

    const [data, setdata] = useState([])

    useEffect(() => {

    fetch('./img/Category/categories.json')
    .then(res=>res.json())
    .then(data=>setdata(data))
    .catch(error=> console.log(error));
    
    }, [])

    

  return (
    <div className='w-full flex flex-wrap py-5 gap-3 justify-center items-center px-2'>
        {data.length > 0 && 
        data.map((category, index) => (
            <div className="flex flex-col h-32 w-32 bg-lime-300 justify-center items-center p-3 square-full hover:bg-lime-500 transition-all duration-400 cursor-pointer ease-linear" key={index}>
                <img src={category.image} alt={category.name} className='w-10 h-10'/>
                <h1 className='text-sm text-center font-bold py-2 w-full texxt-nowrap'>{category.name}</h1>
            </div>
        ))
        }
    </div>
  )
}

export default Categories