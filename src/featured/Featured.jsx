import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Product from '../product/Product'
import './featured.css'


function useProducts(){
    const [product, setProduct] = useState([]);
    useEffect(() => {
        db.collection('Featured Products')
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

const Featured = () => {
    const product=useProducts()
    return (
        <div className="featured">
               
        <div className="topic-ft">
              <h5 className='ft-header'>FEATURED PRODUCTS</h5>

              <p className="ft-tagline">
                  Find all the most exclusive unisex collections within the SIMPLETONES brand. 
              </p>
        </div> 

          <div className="ft-products">
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

export default Featured
