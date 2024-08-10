import React from "react";
import useFetch from "./useFetch";

function Index() {
  const { data, loading, handleClick } = useFetch(
    "https://dummyjson.com/products"
  );
  return loading ? (
    <h1>loading . please wait ..</h1>
  ) : (
    <>
      <div>use Custom fetch</div>
      {data && data.products && data.products.length ? null : (
        <button onClick={handleClick}>fetch data</button>
      )}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </>
  );
}

export default Index;
