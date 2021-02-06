import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Accessories from "./assets/Desktop-Accessories.jpg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import Items from "./components/Items";

function App() {
  const [state, setState] = useState(true);
  return (
    <div>
      <Header state={state} setstate={setState} />
      <Sidebar state={state} setstate={setState} />
      <div className="App_itemcontainer">
        <Items
          title="Lowest cost solar panels in America"
          desc="Money back guarantee"
          descLink=""
          backgroundimg={SolarPanels}
          leftbtntext="ORDER NOW"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
          twobtn="true"
          first
        />

        <Items
          title="Model S"
          desc="$69,428"
          descLink=""
          backgroundimg={ModelS}
          leftbtntext="CUSTOM ORDER"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
          twobtn="true"
        />

        <Items
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={ModelX}
          leftbtntext="CUSTOM ORDER"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
          twobtn="true"
        />

        <Items
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={ModelY}
          leftbtntext="CUSTOM ORDER"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
          twobtn="true"
        />

        <Items
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={Model3}
          leftbtntext="CUSTOM ORDER"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
          twobtn="true"
        />

        <Items
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={Accessories}
          leftbtntext="CUSTOM ORDER"
          leftbtnLink=""
          rightbtntext="LEARN MORE"
          rightbtnLink=""
        />
      </div>
    </div>
  );
}

export default App;
