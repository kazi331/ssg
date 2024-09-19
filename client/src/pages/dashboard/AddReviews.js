import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";
import { serverUrl } from "../../lib/utils";


const AddReviews = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const review = {
      ...data,
      img: user.photoURL,
      badge: ["functionality", "ease of use", "perfection"],
    };
    axios.post(`${serverUrl}/review`, review).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Review Added Successfully!");
        e.target.reset();
      }
    });
  };
  return (
    <div className="container mx-auto my-8 px-2">
      <h2 className="text-center text-3xl">Add a new review</h2>
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 items-center w-full max-w-lg shadow-lg p-4 rounded-xl  py-8 mx-auto"
        >
          <label className="flex justify-between items-center w-full">
            <span className="label-text hidden md:block">Your Name</span>
            <span className="label-text text-red-400">
              {errors.name && "Type your name please!!"}
            </span>
          </label>
          <input
            placeholder="Your Name"
            defaultValue={user?.displayName}
            {...register("name", { required: true })}
            className="input input-bordered input-primary w-full "
          />
          <label className="flex justify-between items-center w-full">
            <span className="label-text hidden md:block">
              Type your review{" "}
            </span>
            <span className="label-text text-red-400">
              {errors.review && "Review Can't be empty!"}
            </span>
          </label>
          <textarea
            placeholder="What do you think about our product?"
            {...register("review", { required: true })}
            className="textarea textarea-primary w-full"
          ></textarea>
          <label className="flex justify-between items-center w-full">
            <span className="label-text hidden md:block">Rating</span>
            <span></span>
          </label>
          <select
            {...register("rating", { required: true })}
            className="select select-primary w-full"
          >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>
          <button className="btn btn-wide">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
