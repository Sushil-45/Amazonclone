import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
               <img className="ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="hhh" />

               <div>
               <h3>Hello, {user?.email}</h3>
                   <h2 className="checkout_title">Your Add to Cart</h2>
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
            <div className="checkout_right">
              <Subtotal />
            </div>


        </div>
    );
}

export default Checkout;
