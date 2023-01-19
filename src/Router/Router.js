import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Add from "../Pages/AddCard/Add";
import Card from "../Pages/Card/Card";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Card></Card>,
  },
  {
    path: "/add",
    element: <Add/>
  },
]);
export default router