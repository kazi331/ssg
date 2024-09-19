import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { serverUrl } from "../../lib/utils";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { pId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverUrl}/product/${pId}`)
      .then((res) => setProduct(res.data));
  }, [pId]);

  const { name: productName, price, img, min_quan, avail, des } = product;
  const [quantity, setQuantity] = useState(parseInt(product.min_quan));
  const successMessage = (
    <div>
      Congrates!! Order Placed SuccessFully!{" "}
      <Link className="text-primary" to="/dashboard">
        Show All
      </Link>
    </div>
  );

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    let order = {
      productName,
      quantity: quantity || min_quan,
      img,
      price,
      name: data.name,
      address: data.address,
      phone: data.phone,
      email: user.email || data.email,
      status: "pending",
    };
    const total_price = order.quantity * order.price;
    order = { ...order, total_price };
    console.log(order);

    fetch(`${serverUrl}/neworder`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) toast.success(successMessage);
        if (data.acknowledged) {
          e.target.reset();
        }
      });
  };
  // if(errors) console.log(errors);
  let quantityError;
  if (quantity < min_quan) {
    quantityError = `You have to order minimum ${ min_quan } items. `;
  } else if (quantity > avail) {
    quantityError = `You can order maximum ${ avail } items. `;
  }

  return (
    <div className="px-2">
      <h3 className="text-lg md:text-3xl text-center text-dark py-12 px-4">
        Order - {productName}
      </h3>

      <div className="card max-w-5xl mx-auto md:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="p-4" src={img} alt="Product" />
        </figure>
        <div className="card-body flex items- justify-center">
          <div className="px-4">
            <h2 className="card-title text-left mb-4">{productName}</h2>
            <p>{des}</p>
          </div>
          <div className="card-actions items-center gap-4 px-4 mt-10">
            <div>
              <p>
                Price: ${price}
                <sub> /item</sub>
              </p>
            </div>
            <div className="flex gap-4 py-2">
              <div
                className="badge badge-outline tooltip"
                data-tip="Min order quantity"
              >
                Min: {min_quan}
              </div>
              <div
                className="badge badge-outline tooltip"
                data-tip="Available quantity"
              >
                Av: {avail}
              </div>
            </div>
          </div>

          {/* form  */}
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2 p-4">
              <label className="label">
                <span className="label-text-alt text-red-400 text-sm">
                  {quantityError}
                </span>
              </label>
              <input
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                type="number"
                defaultValue={min_quan}
                placeholder="Order Quantity"
                className="input input-bordered w-full"
              />
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                readOnly
                value={user?.displayName}
                className="input input-bordered "
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                type="email"
                readOnly={user.email}
                defaultValue={user.email}
                className="input input-bordered "
              />
              <textarea
                {...register("address", { required: true })}
                placeholder="Address"
                className="input input-bordered "
              />
              <input
                {...register("phone", { required: true })}
                placeholder="Phone"
                type="text"
                className="input input-bordered "
              />
              <button
                disabled={quantity < min_quan || quantity > avail}
                className="btn btn-primary"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
