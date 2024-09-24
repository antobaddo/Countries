import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Countries from "../pages/Countries";
import React from "react";
import Country from "../pages/Country";
import CustomLayout from "../layout/CustomLayout";
import VisitedCountries from "../pages/VisitedCountries";
import ErrorPage from "../components/Error";

export const router = createBrowserRouter([
    {
        element: <CustomLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'countries',
                element: <Countries/>,
            },
            {
                path: 'visited_countries',
                element: <VisitedCountries/>,
            },
            {
                path: 'countries/:id',
                element: <Country/>,
            },
            {
                path: '*',
                element: <Navigate to="/countries"/>,
            },
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router}/>;
}