import React, { useState } from 'react'
import '../App.css'


const Products = (prop) => {
    console.log(prop)
    console.log("hii")

    return (
        <div id='Products-div' >

            <div className="title" >
              
              <h3>  {
                  prop.product.title
                }
                </h3>
            </div>

            <div className="image-div">

                <img src={prop.product.image} alt="" />

            </div>

            <div className="price-div">
                <p>
                    <span>
                      Price  {
                            prop.product.price
                        }
                    </span>

                    
                    <br />

                    <span> MRP  </span>  

                  <span style={{textDecoration:""}}>  {
                        prop.product.compare_at_price
                    }
                    </span>



                    
</p>
            </div>

        </div>
    )
}

export default Products