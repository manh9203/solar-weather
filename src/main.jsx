import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolarEventDetails from "./components/SolarEventDetails.jsx";
import CME from "./CME.jsx";
import FLR from "./FLR.jsx";
import GST from "./GST.jsx";
import HSS from "./HSS.jsx";
import IPS from "./IPS.jsx";
import MPC from "./MPC.jsx";
import RBE from "./RBE.jsx";
import SEP from "./SEP.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App name="Solar Weather Explorer" testMode={false} />} />
        <Route path="/event/:type/:time/:id" element={<SolarEventDetails />} />
        <Route path="/CME" element={<CME />} />
        <Route path="/FLR" element={<FLR />} />
        <Route path="/GST" element={<GST />} />
        <Route path="/HSS" element={<HSS />} />
        <Route path="/IPS" element={<IPS />} />
        <Route path="/MPC" element={<MPC />} />
        <Route path="/RBE" element={<RBE />} />
        <Route path="/SEP" element={<SEP />} />
        <Route path="*" element={<><h1>Uh oh, 404. Go back.</h1></>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
