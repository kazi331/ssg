import React from "react";
import contactImage from "../../images/img-01.png";
const Contact = () => {
  const contactSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-24 ">
      <div className="card lg:card-side bg-base-100 py-20 border-t-2 flex items-center justify-around shadow-xl">
        <figure>
          <img src={contactImage} alt="Album" />
        </figure>
        <div className="card-body w-full max-w-md">
          <form
            onSubmit={contactSubmit}
            className="flex flex-col gap-3 items-center justify-center w-full max-w-md"
          >
            <h2 className="card-title text-2xl font-bold my-4">
              Get In Touch With Us
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Type Your Message"
              required
            ></textarea>
            <button className="btn w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
