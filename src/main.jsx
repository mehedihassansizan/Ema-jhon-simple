import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Outlet_home from "./components/Layout/Outlet_home.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import OderReview from "./components/OderReview/OderReview";
import { oderReviewData } from "./utilities/oderReviewData";
import ProceedCheckout from "./components/ProceedCheckout/ProceedCheckout";
import SignUp from "./components/SignUp/SignUp";
import ContextProvider from "./components/ContextProvider/ContextProvider";
import PrivateRoutes from "./components/Routes/privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet_home></Outlet_home>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Products></Products>,
      },
      {
        path: "review",
        element: <OderReview></OderReview>,
        loader: oderReviewData,
      },
      {
        path: "Proceed_Checkout",
        element: <PrivateRoutes><ProceedCheckout></ProceedCheckout></PrivateRoutes>,
      },
      {
        path: "inventory",
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
