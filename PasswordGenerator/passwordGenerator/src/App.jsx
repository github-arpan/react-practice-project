import { useState, useEffect, useCallback } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&~?-_+{}[]=*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className=" w-full h-screen bg-black">
        <div className="max-w-md  mx-auto px-4 py-4 shadow-sm rounded-lg bg-gray-700   text-orange-500">
          <h1 className="text-white text-center text-xl my-4">
            Random Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="password Generator"
              readOnly
              className="outline-none w-full cursor-pointer py-1 px-3"
            />
            <button className="cursor-pointer py-0.5 shrink-0 px-3 outline-none bg-blue-700 text-white">
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                className="cursor-pointer"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="cursor-pointer"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
