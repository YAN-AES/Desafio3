//* Libraries imports
import { createBrowserRouter, } from "react-router-dom";

//* Pages imports
import { Home } from "@/pages/Home";
import { Product } from "@/pages/Product";
import { Design } from "@/pages/Design";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/design",
    element: <Design />,
  }
]);

export { routers };