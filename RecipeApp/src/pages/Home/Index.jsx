import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";
import { Link } from "react-router-dom";

function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  console.log(recipeList);

  if (loading) return <h1>Loading. please wait...</h1>;
  return (
    <>
      <div className="w-full">
        {recipeList ? (
          <div className="flex justify-center flex-wrap gap-10  my-8 mx-auto  w-full">
            {recipeList.map((item) => (
              <div
                key={item.id}
                className=" w-48 border p-3  shadow-lg rounded-lg hover:scale-110 transition-all duration-100 "
              >
                <div className=" h-36 rounded-lg object-cover">
                  <img
                    src={item.image_url}
                    alt="recipe"
                    className=" h-full w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-sm  py-1   font-bold truncate">
                  {item.title}
                </h3>
                <p className="text-[10px]">{item.publisher}</p>
                <Link to={`/recipe-item/${item?.id}`}>
                  <button className="w-full bg-black/70 text-white py-1 my-1 rounded-md uppercase">
                    Recipe details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <h1>Search recipe </h1>
        )}
      </div>
    </>
  );
}

export default Home;
