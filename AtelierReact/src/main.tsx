import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CarForm from "./components/CarForm.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarList from "./components/CarList.tsx";
import { loader as carListLoader } from "./routes/Carlist.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cars/add",
        element: <CarForm />,
      },
      {
        path: "cars/",
        element: <CarList />,
        loader: carListLoader,
      },
      {
        path: "/delete/:id",
        action: async ({ params }) => {
          return params.id;
        },
      },
      {
        path: "/edit/:id",
        element: <CarForm />,
        action: async ({ params }) => {
          return params.id;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
