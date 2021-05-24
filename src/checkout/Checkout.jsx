import React from 'react'
import './checkout.css'
import Subtotal from '../subtotal/Subtotal'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';

const Checkout = () => {
    const [{basket, user}, dispatch]=useStateValue();
    return (
        <div className="checkout">

            <div className="checkout-data">
                <div className="check-fraction checkout-left">
                    <p>Hello,{user?.email}</p>
                    <h1 className="label-ch">
                        Your selected items.
                    </h1>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                        />
                    ))}


                </div>
                <div className="check-fraction checkout-right">
                 <Subtotal/>
                </div>

            </div>
           
        </div>
    )
}

export default Checkout
