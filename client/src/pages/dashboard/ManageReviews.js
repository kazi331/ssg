import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useReviews from "../../hooks/useReviews";
import Delete from "../../shared/svgIcon/Delete";
import { serverUrl } from "../../lib/utils";

const ManageReviews = () => {
  const [reviews] = useReviews();

  const deleteReview = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      axios.delete(`${serverUrl}/review/${id}`).then((res) => {
        if (res.data.acknowledged) {
          toast.info("Review Deleted");
        }
      });
    }
  };
  return (
    <div className="px-2">
      <h2 className="text-center text-3xl font-bold my-12">Manage Reviews</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>rating</th>
              <th>review</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length < 1 && (
              <tr>
                <td colSpan="100%">
                  <p className="p-12 text-xl  flex items-center justify-center">
                    No Reviews found !!
                    <Link className="ml-2 link link-primary" to="/products">
                      Order Now
                    </Link>
                  </p>
                </td>
              </tr>
            )}
            {reviews.map((review, index) => (
              <tr key={index} reviews={reviews}>
                <td>{index + 1}</td>
                <td>{review.rating}</td>
                <td className="max-w-4xl overflow-x-scroll inline-block">
                  {review.review}
                </td>
                <td>{review.name}</td>
                <td>
                  <button
                    htmlFor="delete-modal"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200"
                    onClick={() => deleteReview(review._id)}
                  >
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>SL</th>
              <th>rating</th>
              <th>review</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ManageReviews;
