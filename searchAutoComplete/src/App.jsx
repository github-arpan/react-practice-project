import { useEffect } from "react";
import { useState } from "react";
import Suggestion from "./components/Suggestion";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchparam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };
  const handleClick = (e) => {
    setSearchParam(e.target.innerText);
    setShowDropDown(false);
  };
  console.log(users, filteredUsers);

  const fetchUserdata = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserdata();
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div className="mt-10  mx-auto">
        <input
          type="text"
          placeholder="Search user"
          className="border-black border rounded-lg py-1 px-2 "
          value={searchparam}
          onChange={handleChange}
        />
        {showDropDown && (
          <Suggestion data={filteredUsers} handleClick={handleClick} />
        )}
      </div>
    </div>
  );
}

export default App;
