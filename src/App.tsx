import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinhaFacomp from "./MinhaFacompV2Components/MinhaFacomp";
import LandingPage from "./LandingPage/LandingPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const branch = import.meta.env.VITE_BRANCH || "dev";
const isMainBranch = branch === "main";

const basename = isMainBranch ? "/" : "/d/minhafacomp/";

const router = createBrowserRouter(
  [
    {
      path: "/questionario",
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
    basename,
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
