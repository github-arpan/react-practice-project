import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data && Object.keys(data).length > 0) {
      setUserData(data);
      setUserName("");
      console.log(userData);
    } else {
      setUserData(null);
    }
    setLoading(false);
  };
  const handleClick = () => {
    if (userName.trim() !== "") {
      fetchData();
      setLoading(true);
    }
  };

  return loading ? (
    <h1>Loading . Please wait.</h1>
  ) : (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Github profile"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className=" px-3 py-1 bg-slate-300 placeholder:text-gray-600"
        />
        <button
          className="bg-blue-700 text-white px-2 py-1"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div>{userData !== null && <Card userData={userData} />}</div>
    </div>
  );
}

export default App;
