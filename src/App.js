import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNew from "./pages/AddNew";
import Landing from "./pages/Landing";
import LaptopData from "./pages/LaptopData";
import List from "./pages/List";
import Success from "./pages/Success";
import NoPage from "./pages/NoPage";
import LaptopInfo from "./pages/LaptopInfo";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/laptop-data" element={<LaptopData />} />
        <Route path="/success" element={<Success/>}/>
        <Route path="/list" element={<List />} />
        <Route path="/list/laptops/:id" element={<LaptopInfo />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </div>
  );
};

export default App;
