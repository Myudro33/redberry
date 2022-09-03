import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Landing from "./pages/Landing";
import LaptopData from "./pages/LaptopData";
import List from "./pages/List";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/laptop-data" element={<LaptopData />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
};

export default App;
