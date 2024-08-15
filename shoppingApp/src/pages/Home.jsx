import React, { useEffect, useState } from "react";
import CardTile from "../components/Card-title";
import { Circles } from "react-loader-spinner";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProductData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data && data.length > 0) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-full min-h-[300px] md:min-h-[600px] my-10">
      {loading && (
        <div className="flex justify-center items-center">
          <Circles color="rgb(50, 0, 255)" />
        </div>
      )}
      {products ? (
        <div className="flex flex-wrap md:w-4/5 mx-auto gap-6 justify-center">
          {products.map((item) => (
            <div key={item.id}>
              <CardTile product={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
