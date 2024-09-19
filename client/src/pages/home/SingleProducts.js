import React from "react";
import { Link } from "react-router-dom";

const SingleProducts = ({p}) => {
  // console.log(p.id);
  return (
    <div className="card max-w-lg mx-auto bg-slate-700 shadow hover:shadow-lg">
          <div className="card-actions justify-between p-2 mb-8">
            <div className="badge badge-outline text-accent tooltip tooltip-accent tooltip-right" data-tip="Min order quantity">Min: {p.min_quan}</div>
            <div className="badge badge-outline text-accent tooltip tooltip-accent tooltip-left" data-tip="Available quantity">Av: {p.avail}</div>
          </div>
      <figure>
        <img src={p.img} alt="product_image" object-fit="fill" />
      </figure>
      <div className=" flex flex-col gap-2 p-4 text-slate-200">
        <p>Price: ${p.price}<sub> /item</sub></p>
        <h2 className=""> {p.name}</h2>
        <div className="flex flex-wrap justify-between items-center">
          <Link to={`/purchase/${p._id}`} className="btn btn-sm text-white bg-slate-500">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
