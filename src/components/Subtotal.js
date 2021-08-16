import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../data/StateProvider";
import { getBasketTotal } from "../data/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  // eslint-disable-next-line
  const [{ basket, user }, _] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button
        className="amazonBtn"
        onClick={() => {
          if (user) {
            history.push("/payment");
          } else {
            history.push("/login");
          }
        }}
        disabled={!basket?.length}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
