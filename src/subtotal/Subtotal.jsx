import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
    const history=useHistory();
    const [{basket}, dispatch]=useStateValue();
    return (
        <div className="sub__total">
        <CurrencyFormat
            renderText={(value)=>(
                <div className='sub--total'>
                    <p>
                    Subtotal ({basket.length} items):
                    <h2>{value}</h2>
                    </p>

                    <div className="buttons-ch">
                     <button onClick={e=>history.push('/payment')}> Proceed to check out</button>
                    </div>

                    
                </div>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'US$'}
            />
        
    </div>
    )
}

export default Subtotal
