import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customer";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />

            {/* <Dashboard /> */}
            
          
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
