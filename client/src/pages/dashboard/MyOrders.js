import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loader from "../../shared/Loader";
import Delete from "../../shared/svgIcon/Delete";
import Pay from "../../shared/svgIcon/Pay";
import { serverUrl } from "../../lib/utils";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("available", () =>
    fetch(`${serverUrl}/my-orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loader />;
  if (error) console.log(error);

  const payNow = (id) => {
    console.log("pay now");
  };

  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // main delete function

        fetch(`${serverUrl}/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "The order has been deleted.", "success");
            if (data.deletedCount) {
              refetch();
            }
          });
      }
    });
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
            {orders?.length < 1 && (
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
            {orders?.map((order, index) => (
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
                  <div className="flex gap-2 items-center justify-start">
                    <button
                      htmlFor="delete-modal"
                      data-tip="Pay Now"
                      className="w-8 h-8 tooltip flex"
                      onClick={() => payNow(order._id)}
                    >
                      <Pay />
                    </button>
                    <button
                      htmlFor="delete-modal"
                      data-tip="Cancel Order"
                      className="w-8 h-8 tooltip flex"
                      onClick={() => deleteOrder(order._id)}
                    >
                      <Delete />
                    </button>
                  </div>
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
