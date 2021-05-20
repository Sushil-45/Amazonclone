import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import {Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error,setError] = useState(null);
    const [disabled , setDisabled] = useState(true);
    const [clientSecret , setClientSecreet] = useState(true);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method : 'post',
                url : `/payments/create?total =${getBasketTotal(basket) }`
            });
            setClientSecreet(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])


    const handlesubmit = async (event) =>{
        //do all the stripe

        event.defaultPrevent();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) =>{
            //paymentIntent
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replaceState('/orders')
    })
    }

    const handlechange = event =>{
            //listen for changes in cardelemnts and display errors
            setDisabled(event.empty)
            setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout(
                        <Link to="/Checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/*payment secttion - delivery address*/}
                <div className="payment_section">
                    <div classsName="payment_title">
                        <h3> Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                    <p>{user?.email}</p>
                    </div>
                </div>


                {/*payment secttion - Review items*/}
                 <div className="payment_section">
                 <div classsName="payment_title">
                        <h3> Review Items</h3>
                    </div>
                    <div className="payment_items">
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        />
                    ))}
                     </div>
                </div>


                {/*payment secttion - Payment method*/}
                  <div className="payment_section">
                  <div classsName="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* stripe*/}

                        <form onSubmit={handlesubmit}>
                            <CardElement onChange={handlechange}/>
                            
                            <div className="paymen_price">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3> Order Total: {value }</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} 
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={" Rs "}
                            />
                            <button diasbled={processing || disabled || succeeded}>
                                <span>{processing ?<p>Processing</p> : "Buy now"}</span>
                            </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
