import React from "react";
import value from "../../images/company-values.png";
import mission from "../../images/our-mission.png";
import vision from "../../images/our-vision.png";

const Story = () => {
  return (
    <div>
      <h2 className="text-4xl lg:text-6xl card-title mt-20 mb-12 ml-12">
        Our Company <br></br> Overview
      </h2>

      <div className="card xl:card-side bg-base-100 p-4">
        <figure className="w-full xl:w-2/4 text-center">
          <div className="flex flex-wrap md:flex-nowrap items- justify-around">
            <div className="card w-80 md:w-64 bg-base-100 ">
              <figure className="px-10 pt-10">
                <img src={vision} alt="Shoes" className="w-24 md:w-32" />
              </figure>
              <div className="card-body px-0 items-center text-center">
                <h2 className="card-title text-md md:text-xl lg:text-md text-orange-400">
                  Our Vision
                </h2>
                <p>
                  To be the most contemporary conglomerate – LOCALLY AND
                  GLOBALLY.
                </p>
              </div>
            </div>
            <div className="card w-80 md:w-64 bg-base-100 ">
              <figure className="px-10 pt-10">
                <img src={value} alt="Shoes" className="w-24 md:w-32" />
              </figure>
              <div className="card-body px-0 items-center text-center">
                <h2 className="card-title text-md md:text-xl lg:text-md text-orange-400">
                  Our Vision
                </h2>
                <p>
                  To be the most contemporary conglomerate – LOCALLY AND
                  GLOBALLY.
                </p>
              </div>
            </div>
            <div className="card w-80 md:w-64 bg-base-100 ">
              <figure className="px-10 pt-10">
                <img src={mission} alt="Shoes" className="w-24 md:w-32" />
              </figure>
              <div className="card-body px-0 items-center text-center">
                <h2 className="card-title text-md md:text-xl lg:text-md text-orange-400">
                  Our Vision
                </h2>
                <p>
                  To be the most contemporary conglomerate – LOCALLY AND
                  GLOBALLY.
                </p>
              </div>
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="text-4xl text-orange-400">
            A story of integrity and persistence
          </h2>
          <p className="text-lg mt-6">
            The journey of Super Star Group began with a pretty simple vision;
            making world class electronic products available for the people here
            in Bangladesh, certainly at an affordable price that they will not
            be acceptable by everyone, but also lead the company to become the
            leader in its category of business. For over last two decades the
            company under the brand name “SUPER STAR” has been leading and
            successful manufacturer, importer and marketer of electrical
            accessories and equipment.{" "}
          </p>
          <p className="text-lg mt-6">
            In the year 1994, The company started its journey by establishing
            its first venture, an Incandescent lamp plant located at
            Narayanganj. The Company specializes in providing wide range of
            lighting and other electrical solution for residential, commercial,
            and other special needs. The target of the company is simple,
            offering with a wide range of high-quality lighting solution for the
            customers in Bangladesh, leading the lighting manufacture industry
            and becoming the number one choice in both house hold and industrial
            sector of the country.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
