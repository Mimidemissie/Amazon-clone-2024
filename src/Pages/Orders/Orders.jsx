import React, { useContext, useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut";
import classes from "../Orders/Orders.module.css";
import { db } from "../../Utility/Firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Products/ProductCard";

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))

            
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {/* Display orders */}
          <div>
            {orders?.length === 0 ? (
              <p style={{ padding: "20px" }}>
                You don't have any orders yet. Please place an order.
              </p>
            ) : (
              orders.map((eachOrder) => (
                <div key={eachOrder.id}>
                  <hr />
                  <p>Order ID: {eachOrder.id}</p>
                  <div>
                    {eachOrder.data?.basket?.map((orderItem) => (
                      <ProductCard
                        flex={true}
                        product={orderItem}
                        key={orderItem.id}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
