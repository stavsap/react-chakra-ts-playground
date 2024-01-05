import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dashboard/dashboard";
import Auth from "./components/auth/auth";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            { path: "", element: <Dashboard/> },
            { path: "location", element: "Location" },
            { path: "settings", element: "Settings" },
            { path: "forecast", element: <><h1>HELLO</h1></> }
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: '*',
        element: <Navigate to="/auth" replace />, // Replace with your default page component
    },
]);

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={routes} />
        </ChakraProvider>
    </React.StrictMode>
);
