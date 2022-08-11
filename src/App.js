import { Routes, Route } from "react-router-dom";

// CUSTOM COMPONENTS
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>Hello... I'm the shop route...</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* 
          index tells this route that when the URL "/" is matched, then this
          home route/component should be displayed... 
        */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
