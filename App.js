import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      <Header state={state} setstate={setState} />
      <Sidebar state={state} setstate={setState} />
    </div>
  );
}

export default App;
