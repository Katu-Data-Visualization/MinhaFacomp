import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MinhaFacomp from "./MinhaFacompV2Components/MinhaFacomp";
import LandingPage from "./LandingPage/LandingPage";

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
  ],
  {
    basename: "/d/minhafacomp/",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
