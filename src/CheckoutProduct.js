import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className="checkoutproduct">
            <img className="checkout_productimage" src={image} />

        <div className="checkoutproduct_info">
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>
                <strong>{price}</strong>
                <strong> Rs </strong>
            </p>
            {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
        </div>
        
        </div>
    );
}

export default CheckoutProduct;
