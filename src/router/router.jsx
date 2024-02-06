import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import ErrorContent from "../pages/errorPage/ErrorContent";
import AboutUs from "../pages/about/AboutUs";
import AllTools from "../pages/home/tools/AllTools";
import Download from "../pages/home/download/Download";
import Price from "../pages/packages/Price";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/category/:name',
                element: <AllTools />,
                loader: () => fetch(`/ToolData.json`)
            },
            {
                path: '/download/:name',
                element: <Download />,
                loader: () => fetch(`/ToolData.json`)
            },
            {
                path: '/price',
                element: <Price />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorContent />
    }
]);
export default router;