import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import deleteIcon from "../../images/icons/delete-bin-4-line.svg";
import { serverUrl } from "../../lib/utils";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axios.get(`${serverUrl}/my-orders/${user?.email}`).then((res) => {
      setOrders(res.data);
    });
  }, [user?.email]);

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure to delete this item?");
    if (proceed) {
      axios
        .delete(`${serverUrl}/order/${id}`, {
          method: "delete",
        })
        .then((res) => {
          if (res.data.deletedCount) {
            toast.warn("Order Deleted");
            axios
              .get(`${serverUrl}/my-orders/${user?.email}`)
              .then((res) => {
                setOrders(res.data);
              });
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-3xl my-4 ml-4">My Orders </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product</th>
              <th>U.Price</th>
              <th>Quantity</th>
              <th>T.price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length < 1 && (
              <tr>
                <td colSpan="100%">
                  <p className="p-12 text-xl  flex items-center justify-center">
                    No orders found !!
                    <Link className="ml-2 link link-primary" to="/products">
                      Order Now
                    </Link>
                  </p>
                </td>
              </tr>
            )}
            {orders.map((order, index) => (
              <tr key={index} orders={orders}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold text-sm max-w-xs">
                  {order.productName}
                </td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>${order.total_price}</td>
                <td>{order.status}</td>
                <td>
                  <button
                    htmlFor="delete-modal"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200"
                    onClick={() => deleteOrder(order._id)}
                  >
                    <img src={deleteIcon} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Product</th>
              <th>U.Price</th>
              <th>Quantity</th>
              <th>T.Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
