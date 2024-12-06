import React from "react";
import { Header } from "./Components/layout/Header";
import Home from "./Components/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Createpage from "./Components/pages/Createpage";
import Nopage from "./Components/errorspage/Nopage";
import Update from "./Components/pages/Update";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Createpage />} />
          <Route path="/edit/:id" element={<Update />} />

          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
