import React from 'react'

import './productpage.css'

const ProductPage = (props) => {
   
    return (props.trigger)?(
        <div className='pp-product' >
            <h1 className='pp-title'> {title}</h1>

            <div className="two-pics-info">
                 <div className="two-pics">
                    <img src={image} alt="" />

                    <img src={image}alt="" />
                </div>

                <div className="pp-name">{description}
                {description}
                    ${price}
                    <div className="pp-buttons">
                    <button>ADD TO CART</button>
                    <button>BUY NOW</button>
                    </div>
                    
                </div>
            </div>

            <div className="one-pic-info">
                <div className="the-pic">
                    <img src={image} alt="" />
                </div>


                <div className="material">
                    
                </div>                
            </div>
        </div>

    ):'';
}

export default ProductPage
