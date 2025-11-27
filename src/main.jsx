import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar"; 
import Ideias from "./pages/Ideias";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/registrar", element: <Registrar /> },

  {path: "/criar-ideias", element: <Ideias/>},
  {path: "*", element: <h1>404 - Página Não Encontrada</h1>},
]);

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);


