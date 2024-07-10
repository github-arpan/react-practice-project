import { useEffect, useState } from "react";
import { API_URL } from "../constant/Api";

function UseCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default UseCurrencyinfo;
