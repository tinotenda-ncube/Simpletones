import React from 'react'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import ProductPage from './ProductPage';

const ProductPageDisplay = () => {
    const [{basket, product}, dispatch]=useStateValue();
    return (
        <div>

        {product.some(item=>(
                <ProductPage
             id={item.id}
             title={item.title}
             description={item.description}
             image={item.image}
             price={item.price}
            />
            ))} 
             {/* <ProductPage
             id={product.id}
             title={product.title}
             description={product.description}
             image={product.image}
             price={product.price}
            /> */}
           
        </div>
    )
}

export default ProductPageDisplay
