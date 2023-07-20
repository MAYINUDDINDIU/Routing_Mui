import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const product=useLoaderData();
    return (
        <div>
            <h3>Products{product.length}</h3>
          {
           product.map(pro=><Product key={pro.key} pro={pro}/>)
          }
          
        </div>
    );
};

export default Products;