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
import Contact from "../pages/extraPages/Contact";
import BlogDetails from "../pages/blogs/BlogDetails";
import Agents from "../pages/agents/Agents";
import UnlockModels from "../pages/unlockService/UnlockModels";
import Dashboard from "../layout/Dashboard";
import AddService from "../pages/dashboard/pages/AddService";
import CreatePost from "../pages/dashboard/pages/CreatePost";
import Payments from "../pages/packages/Payments";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import AddFile from "../pages/dashboard/pages/AddFile";
import AddAgent from "../pages/dashboard/pages/AddAgent";
import AddTools from "../pages/dashboard/pages/AddTools";
import AllFile from "../pages/home/files/AllFile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:name",
        element: <AllTools />,
        loader: ({ params }) =>
          fetch(`https://o-gsmservice-server.vercel.app/tool-category/${params.name}`),
      },
      {
        path: "/file-category/:name",
        element: <AllFile />,
        loader: ({ params }) =>
          fetch(`https://o-gsmservice-server.vercel.app/file-brand/${params.name}`),
      },
      {
        path: "/download/tools/:_id",
        element: <Download />,
        loader: ({ params }) =>
          fetch(`https://o-gsmservice-server.vercel.app/single-tool/${params._id}`),
      },
      {
        path: "/download/files/:_id",
        element: <Download />,
        loader: ({ params }) =>
          fetch(`https://o-gsmservice-server.vercel.app/single-file/${params._id}`),
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/do-payment",
        element: <Payments />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/details/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`https://o-gsmservice-server.vercel.app/blog-details/${params.id}`)
      },
      {
        path: "/user-request",
        element: <Request />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/reseller",
        element: <Agents />,
      },
      {
        path: "/unlocking-services",
        element: <UnlockModels />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/add-services",
        element: <AddService />,
      },
      {
        path: "/admin/create-post",
        element: <CreatePost />,
      },
      {
        path: "/admin/post-file",
        element: <AddFile />,
      },
      {
        path: "/admin/add-tool",
        element: <AddTools />,
      },
      {
        path: "/admin/add-agent",
        element: <AddAgent />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorContent />,
  },
]);
export default router;
