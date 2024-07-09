import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [password, setPassord] = useState("");
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) {
      str += "~!@#$%&*()_-+{}?";
    }
    if (numAllowed) {
      str += "0123456789";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassord(pass);
  }, [length, charAllowed, numAllowed, setPassord]);

  const passCopytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-lg w-2/3  mx-auto px-4 py-4 shadow-sm rounded-lg bg-gray-800  h-52 my-8   text-blue-500">
          <h1 className="text-white text-center text-xl my-4">
            Random Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              placeholder="password Generator"
              readOnly
              ref={passwordRef}
              className="outline-none w-full cursor-pointer py-1 px-3 text-black"
            />
            <button
              className="cursor-pointer py-0.5 shrink-0 px-3 outline-none  bg-blue-700 text-white active:scale-95"
              onClick={passCopytoclipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm justify-evenly mt-8 ">
            <div className="flex items-center">
              <input
                type="range"
                min={8}
                max={50}
                value={length}
                className="cursor-pointer mr-2"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length : {length}</label>
            </div>

            <div className="">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                className="cursor-pointer mr-2"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>

            <div className=" ">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="cursor-pointer mr-2"
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
