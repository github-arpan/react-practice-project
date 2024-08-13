import React, { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../utils/context/GlobalContext";

function Favourites() {
  const { favouriteLists, handleClearFav } = useContext(GlobalContext);
  console.log(favouriteLists);

  return (
    <>
      <div className="w-full  min-h-96 md:min-h-[500px] bg-[#f6f4f3] py-20 ">
        <div className="flex justify-center flex-wrap gap-8  my-8 mx-auto  md:w-[70%]">
          {favouriteLists && favouriteLists.length > 0 ? (
            favouriteLists.map((item) => (
              <RecipeItem key={item.id} item={item} />
            ))
          ) : (
            <h1 className="text-xl font-semibold">i'm empty (❁´◡`❁). </h1>
          )}
        </div>
        <div className="flex justify-center">
          {favouriteLists.length > 0 && (
            <button
              onClick={handleClearFav}
              className="px-2 py-1 rounded-md bg-[#170f04]  text-white"
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Favourites;
