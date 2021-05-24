import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import '../mens/mens.css'
import { db } from '../firebase';

function useProducts(){
    const [product, setProduct] = useState([]);
    useEffect(() => {
        db.collection('Womenswear')
        .onSnapshot((snapshot)=>{
            const newProduct=snapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }))
            console.log(newProduct)
            setProduct(newProduct)
        })
    }, [])
    return product
}

const Womens = () => {
    const product=useProducts()
    return (
        <div className="cat-container">
                <div className="heading">
                        <h1 className='heading-text'>WOMEN'S WEAR</h1>
                </div>
                <div className="row">
                    {
                        product.map((prod)=>
                        <Product
                        id={prod.Id}
                        title={prod.Name}
                        description={prod.Description}
                        price={prod.Price}
                        image={prod.Image}                                
                        />
                        )
                        }
                        
                    </div>
            </div>
    )
}

export default Womens
