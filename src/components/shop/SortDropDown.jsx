import React, { useState } from 'react';

function SortDropDown({products,SortedData}) {
    const [sortDropDown, setSortDropDown] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSortDropDown(value);

        let sortedProducts = [...products];

        if (value === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (value === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (value === 'name-asc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (value === 'name-desc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }  

        SortedData(sortedProducts)
    };

    return (
        <div className='mt-10'>
            <select
                id="sortDropDown"
                onChange={handleChange} // Add this handler
                className="focus:outline-none border border-gray-200 py-2 px-3 rounded-md bg-white"
            >
                <option value="">Select...</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
            </select>
        </div>
    );
}

export default SortDropDown;
