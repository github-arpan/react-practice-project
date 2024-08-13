import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("burger");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState([]);
  const [favouriteLists, setFavouriteLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleResizer() {
      setIsWideScreen(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleResizer);

    return () => {
      window.removeEventListener("resize", handleResizer);
    };
  }, []);
  console.log(loading);

  function handleClick(e) {
    e.preventDefault();
    if (isWideScreen !== true) {
      setShowInput(!showInput);
    }
  }

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
        setShowInput(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleAddToFavourite(getCurrentItem) {
    let copyFavList = [...favouriteLists];
    let index = favouriteLists.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      copyFavList.push(getCurrentItem);
    } else {
      copyFavList.splice(index);
    }

    setFavouriteLists(copyFavList);
    console.log(favouriteLists);
  }

  function handleClearFav() {
    setFavouriteLists([]);
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
        showInput,
        setShowInput,
        isWideScreen,
        setIsWideScreen,
        handleClick,
        handleClearFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
