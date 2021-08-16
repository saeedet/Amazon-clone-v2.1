import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from "./../data/reducer";
import axios from "./../axios";
import { db } from "./../firebase";
import LockIcon from "@material-ui/icons/Lock";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();

  useEffect(() => {
    //generating a special stripe secret so we can charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total om currency subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // stop the user to click multiple time on Buy button
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment Intent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/success");
      })
      .catch((err) => alert(err.message));
  };

  const handleChange = (e) => {
    //listen and display any error as customer types
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__nav">
          <Link to="/" className="payment__navLogo">
            <div className="header__logo__container">
              <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
              />
              <span className="payment__navLogoText">.com.au</span>
            </div>
          </Link>
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <LockIcon style={{ color: "#565959" }} />
        </div>
        <div className="payment__containerBody">
          <div className="payment__containerLeft">
            <div className="payment__delivery">
              <div className="payment__title">
                <h3>1 &nbsp;&nbsp;&nbsp; Delivery Address</h3>
              </div>
              <div className="payment__address">
                <p>{user?.displayName}</p>
                <p>34 Dempster Street</p>
                <p>Wollongong, NSW, 2500</p>
                <p>
                  <a href="">Add delivery instructions</a>
                </p>
                <p>
                  <span>Or ship to an Amazon Pickup Location</span> -{" "}
                  <a href="">20 locations near this address</a>
                </p>
              </div>
            </div>
            <div className="payment__items">
              <div className="payment__title">
                <h3>2 &nbsp;&nbsp;&nbsp; Review items</h3>
              </div>
              <div className="payment__item">
                {basket.map((item) => (
                  <CheckoutProduct
                    key={Math.random()}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    title={item.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="payment__containerRight">
            <div className="payment__section">
              <div className="payment__details">
                <form onSubmit={handleSubmit}>
                  <div className="payment__formInput">
                    <div className="payment__formInput__description">
                      Card number
                    </div>
                    <div className="payment__formInput__holder">
                      <CardNumberElement
                        className="payment__cardNumber"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="payment__formInput">
                    <div className="payment__formInput__description">
                      Name on card
                    </div>
                    <div className="payment__formInput__holder">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="payment__formInput">
                    <div className="payment__formInput__description">
                      Expiration date
                    </div>
                    <div className="payment__formInput__holder">
                      <CardExpiryElement
                        className="payment__cardExpiry "
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="payment__formInput">
                    <div className="payment__formInput__description">
                      CVV/CVC
                    </div>
                    <div className="payment__formInput__holder">
                      <CardCvcElement
                        className="payment__cartCvc "
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="payment__priceContainer">
                    <CurrencyFormat
                      decimalScale={2}
                      value={getBasketTotal(basket)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      renderText={(value) => <h3>Order Total: {value}</h3>}
                    />
                    <button disabled={processing || disabled || succeeded}>
                      <span>
                        {processing ? <p>Processing...</p> : "Place your order"}
                      </span>
                    </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
