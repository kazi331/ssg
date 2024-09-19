import { useQuery } from "react-query";
import { serverUrl } from "../../lib/utils";
import Loader from "../../shared/Loader";
import SingleProducts from "./SingleProducts";

const FeaturedProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch(`${serverUrl}/products`).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <Loader />
      </div>
    );
  }

  let emptyMsg;
  if (products?.length === 0) {
    emptyMsg = "No products Found ";
  }


  return (
    <div className="mt-24 mx-4">
      <h2 className="text-center text-dark-600 text-4xl font-bold">
        Featured Products
      </h2>
      <p className="text-dark-200 text-center">Browser Our Top Products</p>
      <p>{products?.length === 0 && emptyMsg}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {products?.slice(0, 8).map((p, index) => (
          <SingleProducts key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
