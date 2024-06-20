//* Libraries imports
import { createBrowserRouter, } from "react-router-dom";

//* Layout imports
import { PublicPages } from "@/layout/public-pages";

//* Pages imports
import { Home } from "@/pages/Home";
import { Product } from "@/pages/Product";
import { Design } from "@/pages/Design";
import { Checkout } from "@/pages/checkout";
import { Contact } from "@/pages/contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <PublicPages />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "design",
        element: <Design />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  },
]);

export { routers };