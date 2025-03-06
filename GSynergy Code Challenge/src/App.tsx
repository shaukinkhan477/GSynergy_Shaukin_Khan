import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StorePage from "./pages/StorePage";
import SkuPage from "./pages/SkuPage";
import PlanningPage from "./pages/PlanningPage";
import ChartPage from "./pages/ChartPage";
import './App.css'

function App() {


  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<StorePage />} />
              <Route path="/stores" element={<StorePage />} />
              <Route path="/skus" element={<SkuPage />} />
              <Route path="/planning" element={<PlanningPage />} />
              <Route path="/chart" element={<ChartPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
