//* Libraries imports
import { createBrowserRouter, } from "react-router-dom";

//* Pages imports
import { Home } from "@/pages/Home";
import { Product } from "@/pages/Product";
import { Design } from "@/pages/Design";
import { Checkout } from "@/pages/checkout";

const routers = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/design",
    element: <Design />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  }
]);

export { routers };