import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinhaFacomp from "./MinhaFacompV2Components/MinhaFacomp";
import LandingPage from "./LandingPage/LandingPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      path: "/home",
      element: <MinhaFacomp />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename: "/d/minhafacomp/",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
