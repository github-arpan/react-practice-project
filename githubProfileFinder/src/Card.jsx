import React from "react";

function Card({ userData }) {
  const { avatar_url, bio, name, login, followers, following } = userData;
  return userData !== null ? (
    <div className="flex justify-center items-center mt-10">
      <div>
        <div className="flex justify-center">
          <img src={avatar_url} alt="user" />
        </div>
        <div className="mt-4 space-x-2 max-w-[70%] mx-auto ">
          <h3 className="font-bold">Name : {name || login}</h3>
          <p>Bio : {bio}</p>
          <p>Following : {following} </p>
          <p>Followers : {followers}</p>
        </div>
      </div>
    </div>
  ) : null;
}

export default Card;
