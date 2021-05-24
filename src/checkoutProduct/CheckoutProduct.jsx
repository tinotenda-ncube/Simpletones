import React from 'react'
import { useStateValue } from '../StateProvider';
import './checkoutproduct.css'

const CheckoutProduct = ({id, title, description, image, price}) => {

    const [{basket}, dispatch]=useStateValue();

    const removeFromBasket=()=>{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                id:id,
            })
    }
    return (
        <div className='checkout-product'>

            <img  src={image} alt="" className="chp-image"/>

            <div className="chp-info">
                <div className="chp-information">
                    <h4 className="chp-title">{title}</h4>
                    <p className="chp-desc">{description}</p>
                </div>

                <div className="chp-button">
                    <p className="chp-price">
                        <small>US$</small>
                        <strong>{price}</strong>
                    </p>
                        <button onClick={removeFromBasket}>Remove</button>
                </div>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
