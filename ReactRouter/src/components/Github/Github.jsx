import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/github-arpan")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className=" m-4 bg-gray-600 text-white p-4 text-3xl flex flex-1">
      <div className="m-4 p-4">
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>

      <div className="m-4 p-4 ">
        <h2 className="mb-3">Name : {data.name}</h2>
        <h4>Github followers: {data.followers}</h4>
      </div>
    </div>
  );
}

export default Github;

export const GithubLoaderinfo = async () => {
  const response = await fetch("https://api.github.com/users/github-arpan");
  return response.json();
};
