import { useEffect, useState } from "react";
import { serverUrl } from "../lib/utils";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log('user inside useToken' ,user);
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    // console.log(user?.user);
    const currentUser = { email: email, name: name };
    // console.log(currentUser);
    if (email) {
      fetch(`${serverUrl}/users/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('data inside of useToken', data);
          const accessToken = data.token;
          localStorage.setItem("access_token", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
