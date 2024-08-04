import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  const fetchData = async () => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const user = await res.json();
    console.log(user);
  };
  const handleClick = () => {
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      +
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
    </div>
  );
}

export default App;
