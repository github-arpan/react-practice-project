import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";

import RecipeItem from "../../components/recipe-item";
function Home() {
  const { loading, recipeList } = useContext(GlobalContext);

  return (
    <>
      <div className="w-full min-h-screen   ">
        <div className="bg-[#f6f4f3] py-20 ">
          {loading ? (
            <h1 className="text-xl font-semibold text-center">Loading ..</h1>
          ) : (
            <div className="flex justify-center flex-wrap md:gap-10 gap-6  my-8 mx-auto  md:w-[90%] lg:w-[80%]">
              {recipeList.map((item) => (
                <RecipeItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
