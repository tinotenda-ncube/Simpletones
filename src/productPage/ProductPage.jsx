import React from 'react'
import CheckoutProduct from '../checkoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider';
import Product from '../product/Product'
import './productpage.css'

const ProductPage = () => {
    const [{basket, user}, dispatch]=useStateValue();
    return (
        <div>
        {basket.map(item=>(
                        <Product
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
        </div>
    )
}

export default ProductPage
