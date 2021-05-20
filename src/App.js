import React, { useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from"./Checkout";
import Login from "./Login";
import Payment from './Payment';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";
import Contact from "./Contact";


const promise = loadStripe("pk_test_51Ik3cJSJedGOP7oXDVB21GVaCLtItIcJez4rowBmzUHIKJiEQpkGmuUgI1c2SOFSgOgr6rdqmHoPXiH1KAer33ka00ty1Rs62o");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
      <Router>
          <div className="app">

            <Switch>
            <Route path="/adminpanel">
               <h1>Error page not found</h1>
               </Route>

               <Route path="/Login">
              <Login />
              <Contact />
               </Route>



            <Route path="/checkout">
            <Header />
               <Checkout />
               <Contact />
              </Route>
              

              <Route path="/Payment">
            <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
              </Route>

              <Route path="/contact">
              <Header />
                <Contact />
              </Route>


              <Route path="/">
              <Header />
                <Home />
                <Contact />
              </Route>


            </Switch>
          </div>
      </Router>
  );
}

export default App;
