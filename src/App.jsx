import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customer";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />

              <Route
                path="/error-400"
                element={
                  <ErrorPage
                    code="400"
                    title="Bad Request"
                    description="Permintaan tidak valid"
                    image="src/assets/error0.png"
                  />
                }
              />

              <Route
                path="/error-401"
                element={
                  <ErrorPage
                    code="401"
                    title="Unauthorized"
                    description="Silakan login terlebih dahulu"
                    image="src/assets/error1.png"
                  />
                }
              />

              <Route
                path="/error-403"
                element={
                  <ErrorPage
                    code="403"
                    title="Forbidden"
                    description="Anda tidak memiliki akses"
                    image="src/assets/error3.png"
                  />
                }
              />

              {/* HARUS PALING BAWAH */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
