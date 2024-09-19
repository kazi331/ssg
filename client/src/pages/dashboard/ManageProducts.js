import axios from "axios";
import { useForm } from 'react-hook-form';
import { useQuery } from "react-query";
import { serverUrl } from "../../lib/utils";
import ProductLoader from "../../shared/svgIcon/ProductLoader";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
    error,
  } = useQuery("products", () =>
    fetch(`${serverUrl}/products`).then((res) => res.json())
  );
  const { register, handleSubmit } = useForm();
  if (isLoading) return <ProductLoader />;
  if (error) console.log(error);
  const updateProduct = () => {
    console.log("update");
    refetch();
  };

  const addProduct = (data, e) => {
    // imgbb file manipulation
    const formData = new FormData();
    formData.append("image", data?.img[0]);
    const link = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(link, { method: "post", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.display_url) {
          const img = result.data.display_url;
          const product = { ...data, img };

          fetch(`${serverUrl}/product`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                e.target.reset();
              }
            });
        }
      });
  };

  // delete product
  const deleteProduct = (id) => {
    const confirm = window.confirm("Are You Sure to delete ? ");
    if (confirm) {
      axios.delete(`${serverUrl} / product / ${id}`).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount) refetch();
      });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mx-4">
        <h3 className="text-center text-3xl mb-4">
          Manage Products : {products?.length}
        </h3>
        <label htmlFor="add-product-modal" className="btn btn-sm btn-success">
          Add New Product
        </label>
      </div>
      {/* add new product modal */}
      <div>
        <input
          type="checkbox"
          id="add-product-modal"
          className="modal-toggle"
        />
        <div
          className="modal modal-bottom sm:modal-middle"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <div className="modal-box mt-32">
            <label
              htmlFor="add-product-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Add New Product</h3>
            {/* add product form */}
            <form
              onSubmit={handleSubmit(addProduct)}
              className="flex flex-col gap-3 items-center justify-center w-full max-w-md mx-auto my-4"
            >
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
              <div className="flex gap-2 sm:flex-nowrap flex-wrap">
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Unite Price"
                  className="input input-bordered w-full"
                />
                <input
                  {...register("min_quan", { required: true })}
                  type="number"
                  placeholder="Min Quantity"
                  className="input input-bordered w-full"
                />
                <input
                  {...register("avail", { required: true })}
                  type="number"
                  placeholder="Stock Quantity"
                  className="input input-bordered w-full"
                />
              </div>
              {/* <input
                {...register("img", { required: true })}
                type="text"
                placeholder="Product image url"
                className="input input-bordered w-full"
              /> */}
              <input
                {...register("img", { required: true })}
                type="file"
                className="input input-bordered w-full"
              />
              <textarea
                {...register("des", { required: true })}
                className="textarea textarea-bordered w-full"
                placeholder="Product Description"
              ></textarea>
              <button
                // onClick={addProduct}
                className="btn btn-success btn-wide">
                Add Product
              </button>
            </form>
            {/* <label htmlFor="add-product-modal" className="btn">Cancel</label> */}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12">
                        <img src={p.img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{p.name}</td>
                <td>${p.price}</td>
                <td>{p.avail}</td>
                <td>
                  <div>
                    <button
                      onClick={() => updateProduct(p.email)}
                      className="btn btn-xs btn-success mr-2"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="btn btn-xs btn-warning"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
