import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Product from '../product/Product'
import './mens.css'


function useProducts(){
        const [product, setProduct] = useState([]);
        useEffect(() => {
            db.collection('Menswear')
            .onSnapshot((snapshot)=>{
                const newProduct=snapshot.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                
                setProduct(newProduct)
            })
        }, [])
        return product
    }

const Mens = () => {
        const product=useProducts()
    return (
            <div className="cat-container">
                <div className="heading">
                        <h1 className='heading-text'>MEN'S WEAR</h1>
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

export default Mens
