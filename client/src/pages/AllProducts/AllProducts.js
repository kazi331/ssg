import { useQuery } from "react-query";
import { serverUrl } from "../../lib/utils";
import ErrorCard from "../../shared/ErrorCard";
import Loader from "../../shared/Loader";
import SingleProducts from "../home/SingleProducts";

const AllProducts = () => {
  const { data: products, isLoading, error } = useQuery("products", () =>
    fetch(`${serverUrl}/products`).then((res) => res.json())
  );
  //   products.length = 8;
  if (isLoading) {
    return (
      <div className="flex items-center justify-center ">
        <Loader />
      </div>
    );
  }
  if (error) return <ErrorCard />
  return (
    <div className="mt-24 mx-4">
      <h2 className="text-center text-dark-600 text-4xl font-bold">
        Our Products
      </h2>
      <p className="text-dark-200 text-center">Browser Our Top Products</p>
      <p> {products?.length < 1 && "No products Found "}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {products?.map((p, index) => (
          <SingleProducts key={index} p={p} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
