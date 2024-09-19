import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-2">
      <h3 className="text-lg md:text-2xl font-bold px-4 mt-8 md:my-12">
        Some important Questions Every Developers should know !!
      </h3>

      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            1. How will you improve the performance of a React Application?
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged. <br />
            So, Now we are gonna discuss some key factors to improve the
            performance of react application. <br /> <br />
            <big>React performance optimization </big>
            techniques. <br />
            <b>1. Keeping component state local where necessary </b> <br />
            We should create child components and join theme with parent to
            reduce re-rendering. This code refactoring helps us to reduce web
            component load <br />
            <b>
              2. Memoizing React components to prevent unnecessary re-renders
            </b>
          </p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            2. What are the different ways to manage a state in a React
            application?
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            3. What are the different ways to manage a state in a React
            application?
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">4. How does prototypical inheritance work?</p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            5. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            6. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
      <div className="card w-full max-w-7xl mx-auto my-6 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-xl">
            7. hat is a unit test? Why should write unit tests?
          </p>
          <h2 className="font-bold mb-4 lg:card-title"> </h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
