import React from "react";
import { Link } from "react-router-dom";

const BusinessStat = () => {
  return (
    <div className="mt-24 px-2">
      <h2 className="text-3xl text-center font-bold">
        Worldwide Business Trust Us
      </h2>
      <p className="text-center text-gray-500 mb-8 mt-2">
        We trade in many coutries with great satisfaction
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:stats lg:shadow">
          <div className="stat rounded-lg lg:rounded-none shadow lg:shadow-none gap-y-4">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div className="stat-title text-2xl">Districts </div>
            <div className="stat-value text-primary">64</div>
            <div className="stat-desc">
              Covered with an ever <br /> growing network
            </div>
          </div>
          <div className="stat rounded-lg lg:rounded-none shadow lg:shadow-none gap-y-4">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="stat-title text-2xl">Families</div>
            <div className="stat-value text-secondary">25M</div>
            <div className="stat-desc">
              And homes enlightned <br /> with our products{" "}
            </div>
          </div>
          <div className="stat rounded-lg lg:rounded-none shadow lg:shadow-none gap-y-4">
            <div className="stat-figure text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="stat-title text-2xl">Employees</div>
            <div className="stat-value text-warning">5000+</div>
            <div className="stat-desc">
              Working in hopes and <br></br>dreams to make a difference{" "}
            </div>
          </div>
          <div className="stat rounded-lg lg:rounded-none shadow lg:shadow-none gap-y-4">
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="stat-title text-2xl">Years</div>
            <div className="stat-value text-accent">25</div>
            <div className="stat-desc">
              {" "}
              Of continuous innovation, <br /> devotion and dedication{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="card max-w-3xl  mt-8  mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Have any Queries About Our Business? </h2>
          <p>Don't hasitate to contact with us.</p>
          <div className="card-actions justify-end">
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
            <Link to="/contact" className="btn btn-success">
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStat;
