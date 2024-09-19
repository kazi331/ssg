
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loader from "./Loader";
// import useToken from "../hooks/useToken";

const Protected = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // const [token] = useToken(user)
  if (loading)
    return (
      <div className="text-center p-20 flex items-center justify-center">
        <Loader />
      </div>
    );
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  return children;
};

export default Protected;
