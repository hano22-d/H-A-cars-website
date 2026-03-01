import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home";
import Cars from "./pages/cars"
import Store from "./pages/store"
import News from "./pages/news"
import Compare from "./pages/compare"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "cars", element: <Cars /> },
      { path: "store", element: <Store /> },
      { path: "news", element: <News /> },
      {path: 'compare',element: <Compare/>}
    ],
  },
]);
