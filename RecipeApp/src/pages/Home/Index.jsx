import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";

import RecipeItem from "../../components/recipe-item";
function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  console.log(recipeList);

  if (loading) return <h1>Loading. please wait...</h1>;
  return (
    <>
      <div className="w-full mt-20 ">
        {recipeList ? (
          <div className="flex justify-center flex-wrap gap-10  my-8 mx-auto  w-full">
            {recipeList.map((item) => (
              <RecipeItem key={item.id} item={item} />
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
