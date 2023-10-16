import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingCart from "./LandingCart";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingCart />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;