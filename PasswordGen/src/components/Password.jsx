import { useState, useCallback, useEffect,useRef } from "react";
import "./Password.css";
const Password = () => {
  // Password Generation Logic
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const refHook = useRef(null);

  // useCallback Hook 
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789"
    let symbols = "!@#$%^&*()_-+=<>?";
    if (number) alphabets += numbers;
    if (symbol) alphabets += symbols;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * alphabets.length + 1);
      pass += alphabets.charAt(char);
    }
    setPassword(pass);
  }, [length, number, symbol, setPassword]);

  // useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, number, symbol, setPassword]);

  const copyPass = useCallback(() => {
    refHook.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className="bg-white w-100 p-3 rounded-3 text-black">
      <div className="mb-3 row align-items-center">
        <div className="col">
          <input type="text" className="fw-bold form-control" placeholder="Password" value={password}
          ref={refHook}/>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary"
          onClick={copyPass}>
            Copy
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordLength" className="form-label">
          Length : {length}
        </label>
        <input
          type="range"
          className="form-range"
          min={8}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="form-check mb-3 custom-checkbox">
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={number}
          onChange={() => setNumber((prev) => !prev)}
        />
        <label htmlFor="includeNumber" className="form-check-label">
          Number
        </label>
      </div>
      <div className="form-check mb-3 custom-checkbox">
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={symbol}
          onChange={() => setSymbol((prev) => !prev)}
        />
        <label htmlFor="includeCharacter" className="form-check-label">
          Symbol
        </label>
      </div>
      
    </div>
  );
};
export default Password;
