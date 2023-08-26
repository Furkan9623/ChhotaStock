import { useState } from "react";
import "./App.css";
import Page1Layout from "./pages/Page_1_Layout";
import Page2Layout from "./pages/Page_2_Layout";
import Page3Layout from "./pages/Page_3_Layout";
function App() {
  const [count, setCount] = useState(1);
  const movePage = () => {
    setCount(count + 1);
  };
  const moveBackPage = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      {(count === 1 && <Page1Layout />) ||
        (count === 2 && <Page2Layout />) ||
        (count === 3 && <Page3Layout />)}
      <div className="move-btn">
        <button
          onClick={moveBackPage}
          style={{ border: "none" }}
          disabled={count === 1 && true}
        >
          {" "}
          {"<<"}{" "}
        </button>{" "}
        <span>{count} / 3 </span>
        <button
          onClick={movePage}
          disabled={count === 3 && true}
          style={{ border: "none" }}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default App;
