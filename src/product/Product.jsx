import React from 'react'
import { Link } from 'react-router-dom'
import ProductPage from '../productPage/ProductPage'
import { useStateValue } from '../StateProvider'
import './product.css'


const Product = ({ id, title, description,price, image}) => {

    const [{basket}, dispatch]=useStateValue()

    const addtoBasket=()=>{
        // dispatch this item into the data layer

        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                description:description,
                image:image,
                price:price,
            }
        })
    }

    const showProduct=()=>{
        dispatch({
            type: "SHOW_PRODUCT",
            item:{
                id:id,
                title:title,
                description:description,
                image:image,
                price:price,
            }
        })
    }
    return (
       
        <div className="product">
            <Link to='/product-page'>
                <div className="prod-image" >
                    <img src={image} alt=""/>
                </div>
            </Link>
            <ProductPage trigger={true}>
                MY POPUP
            </ProductPage>
            <div className="prod-info">
                <h1 className="label">{title}</h1>
                <p className='p-tag'> {description}</p>
          

                <div className="price">
                    <strong>${price}</strong>
                </div>

             <div className="button">
                <button onClick={addtoBasket}>Add to basket</button>
             </div>
            </div>
        </div>
      
    )
}

export default Product
