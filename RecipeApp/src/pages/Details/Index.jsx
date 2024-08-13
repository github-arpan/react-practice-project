import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { GlobalContext } from "../../utils/context/GlobalContext";

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavourite,
    favouriteLists,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();

        if (data && data?.data.recipe) {
          setRecipeDetailsData(data.data.recipe);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeDetails();
  }, [id]);
  console.log(recipeDetailsData);

  return recipeDetailsData ? (
    <div className="flex md:flex-row flex-col m-10 bg-[#f6f4f3] py-20">
      <div className="md:flex-1 h-full md:w-[500px] md:h-[500px]  object-cover rounded-xl">
        <img
          src={recipeDetailsData.image_url}
          alt={recipeDetailsData.title}
          className="h-full w-full object-cover p-5 "
        />
      </div>
      <div className="md:flex-1 p-5 ">
        <div className="flex items-center flex-col w-full text-xs">
          <h3 className="font-bold text-xl">{recipeDetailsData.title}</h3>
          <p>{recipeDetailsData.publisher}</p>
          <p>Serving: {recipeDetailsData.servings}</p>
          <p>Cooking time: {recipeDetailsData.cooking_time} min</p>
        </div>

        <div>
          <h3 className="font-bold mt-5">Ingredients :</h3>
          <ul className="space-y-2">
            {recipeDetailsData?.ingredients?.length > 0 &&
              recipeDetailsData.ingredients.map((ingredient, index) => (
                <li key={index} className="">
                  <span className="text-[8px] ">⚫ </span>
                  <span>{ingredient.quantity}</span>
                  <span>{ingredient.unit} </span>
                  <span>{ingredient.description} </span>
                </li>
              ))}
          </ul>
        </div>

        <div className="font-bold mt-4">
          <a href={recipeDetailsData.source_url}>Read more ...</a>
        </div>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetailsData)}
            className="w-full bg-[#bc8741] text-black font-semibold py-1 mt-10 hover:bg-[#9a6a2c]  rounded-md uppercase"
          >
            {favouriteLists &&
            favouriteLists.findIndex(
              (item) => item.id === recipeDetailsData.id
            ) !== -1
              ? "Remove from favourites"
              : "Add to favourite"}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Details;
