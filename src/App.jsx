import { useState } from "react";
// import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
// import Customers from "./pages/Customer";
// import Orders from "./pages/Orders";
// import NotFound from "./pages/NotFound";
// import ErrorPage from "./pages/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import { Suspense } from "react";
import Loading from "./components/Loading";
import React from "react";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Orders = React.lazy(() => import("./pages/Orders"))
  const Customers = React.lazy(() => import("./pages/Customer"))
  const NotFound = React.lazy(() => import("./pages/NotFound"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
  const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))

  // const [count, setCount] = useState(0);

  return (
<Suspense fallback={<Loading />}>

    <Routes>
      <Route element={<MainLayout />}>
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
      </Route>

      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
