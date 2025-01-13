import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import SortDropDown from './SortDropDown';

function ProductList() {
    const [intialProducts, setintialProducts] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./img/Products/products.json')
            .then((res) => res.json())
            .then((data) => {
                setintialProducts(data.products);
                setData(data.products);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <>
            <div className="flex justify-end items-center w-full p-5 mt-6">
                <SortDropDown products={intialProducts} SortedData={setData} />
            </div>
            <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 gap-3">
                {data.length > 0 &&
                    data.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </>
    );
}

export default ProductList;
