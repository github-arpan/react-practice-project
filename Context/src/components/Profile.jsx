import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return <h2 className="text-center text-3xl font-bold">Please Login</h2>;
  return (
    <h2 className="text-center text-3xl font-bold">Welcome {user.username}</h2>
  );
}

export default Profile;
