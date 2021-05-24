import React from 'react'
import Featured from '../featured/Featured'
import "./home.css"

const Home = () => {
    return (
        <div className="home">
           <div className='home-container'>

                <div className="hero-section">
                </div>
                
                <div className="hero-intro">
                    <h1 className="seg-head">
                        SIMPLY COMPLEX SIMPLETONES
                    </h1>
                    <p className="tagline">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, deleniti velit nesciunt totam reiciendis aliquam iusto id fugit impedit commodi quos repellendus voluptates aut minus similique delectus veniam illum quo placeat facilis. Quis recusandae earum repellendus distinctio dolorum! Temporibus labore iste voluptate consequuntur fuga nihil quis tempore repudiandae modi eaque!
                    </p>
                </div>

                <div className="unisex-section  hm-section">

                    <h1 className="hero-head">
                        UNI-SEX COLLECTIONS
                    </h1>

                    <div className="hm-unisex-segment">
                        <div className="home-collection-display hoodies-hm">
                            <h1 className="seg-head">HOODIES</h1>
                        </div>

                        <div className="home-collection-display sweaters-hm">
                            <h1 className="seg-head">SWEATERS</h1>
                        </div>
                        <div className="home-collection-display shirts-hm">
                            <h1 className="seg-head">T-SHITRS</h1>
                        </div>
                    </div>

                </div>

                <div className="featured-hm">
                <Featured/>
                </div>


                <div className="m-w-section  ">
                    <h1  className="hero-head men-header">
                        MEN & WOMEN'S COLLECTIONS
                    </h1>
                    <div className="the-links-hm">
                      
                        <div className="mens-section-hm">
                            <h1 className="seg-head">
                                MEN'S COLLECTION
                            </h1>

                            <h5 className='hm-shop-now'>SHOP NOW</h5>
                         </div>
                        
                    
                    
                     
                        <div className="womens-section-hm">
                            <h1 className="seg-head">
                                WOMEN'S COLLECTION
                            </h1>
                            <h5 className='hm-shop-now'>SHOP NOW</h5>
                        </div>
                       
                    
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Home
