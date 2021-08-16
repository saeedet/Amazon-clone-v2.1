import React, { useEffect, useState } from "react";
import { useStateValue } from "../data/StateProvider";
import { db } from "../firebase";
import "./Orders.css";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ user }, _] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          // tricky
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders__backdrop">
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__tabs">
          <div className="orders__tabsOption active">Orders</div>
          <div className="orders__tabsOption">Buy Again</div>
          <div className="orders__tabsOption">Cancelled Orders</div>
        </div>
        <div className="orders__order">
          {orders?.map((order) => (
            <Order key={Math.random()} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
