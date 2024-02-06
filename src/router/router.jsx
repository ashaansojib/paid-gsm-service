import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import ErrorContent from "../pages/errorPage/ErrorContent";
import AllTools from "../pages/home/tools/AllTools";
import Download from "../pages/home/download/Download";
import Price from "../pages/packages/Price";
import Blogs from "../pages/blogs/Blogs";
import Request from "../pages/userRequest/Request";
import About from "../pages/extraPages/About";

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
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/user-request',
                element: <Request />
            },
            {
                path: '/about-us',
                element: <About />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorContent />
    }
]);
export default router;