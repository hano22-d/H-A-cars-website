import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home";
import Cars from "./pages/cars";
import Store from "./pages/store";
import News from "./pages/news";
import Compare from "./pages/compare";
import Gallery from "./pages/gallery";
import Gallery2D from "./components/UiComponents/gallery2d";
import Gallery3D from "./components/UiComponents/gallery3d";
import ErrorPage from "./components/UiComponents/errorpage";
import CarsDetailsGallery from "./components/UiComponents/carsDetailsGallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <MainLayout />,
    children: [
      { path: "cars", element: <Cars /> },
      { path: "store", element: <Store /> },
      { path: "news", element: <News /> },
      { path: "compare", element: <Compare /> },
      {
        path: "gallery",
        element: <Gallery />,
        children: [
          { index: true, element: <Gallery2D /> },
          { path: "gallery3d", element: <Gallery3D /> },
          { path: "car/:id", element: <CarsDetailsGallery /> },
        ],
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
