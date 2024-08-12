import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("chicken");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favouriteLists, setFavouriteLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };
  async function fetchData() {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data && data.data.recipes && data.data.recipes.length) {
        setRecipeList(data.data.recipes);
        setSearchParam("");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   fetchData(searchParam);
  // }, []);

  function handleAddToFavourite(getCurrentItem) {
    // let copyFavList = [...favouriteLists];
    // let index = favouriteLists.findIndex(
    //   (item) => item.id === getCurrentItem.id
    // );
    // if (index === -1) {
    //   copyFavList.push(getCurrentItem);
    // } else {
    //   copyFavList.slice(index);
    // }

    // setFavouriteLists(copyFavList);
    console.log(favouriteLists);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        favouriteLists,
        setFavouriteLists,
        handleAddToFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
