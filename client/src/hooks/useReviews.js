import { useEffect, useState } from "react";
import { serverUrl } from "../lib/utils";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${serverUrl}/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};
export default useReviews;
