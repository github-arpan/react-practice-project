import React, { useEffect, useState } from "react";
import CardTile from "../components/Card-title";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProductData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data && data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-full my-10">
      {products ? (
        <div className="flex flex-wrap gap-8 justify-center">
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
