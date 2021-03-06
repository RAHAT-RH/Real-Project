import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Overview from "./pages/Overview";
import { Reports, ReportsFour, ReportsOne, ReportsThree, ReportsTwo } from "./pages/Reports";
import Team from "./pages/Team";

function App() {


  return (
    <div >
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/reports1" element={<ReportsOne />} />
        <Route path="/reports/reports2" element={<ReportsTwo />} />
        <Route path="/reports/reports3" element={<ReportsThree />} />
        <Route path="/reports/reports4" element={<ReportsFour />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
