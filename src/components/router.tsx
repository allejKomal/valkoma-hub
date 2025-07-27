import Home from "@/pages/home";
import ViteShadcn from "@/pages/shadcn/vite-shadcn";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/shadcn-vite",
        element: <ViteShadcn />,
    },

]);
