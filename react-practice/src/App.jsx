import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";

const CountContext = createContext(null);

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

const App = () => {
  return (
    <CountProvider>
      <Main />
    </CountProvider>
  );
};

const Main = () => {
  // const [count, setCount] = useState(0);
  const { count, setCount } = useCount();

  useEffect(()=>{
    console.log("click");
  },[count]);//固定

  return (
    <>
      <h1>カウントアプリ</h1>
      <div className="card">
        <Button
          handleClick={() => {
            setCount((count) => count + 1);
          }}
        />
      </div>
    </>
  );
};

const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <Count />
    </button>
  );
};

const Count = () => {
  const { count } = useCount();
  return <span>count is {count}</span>;
};

export default App;