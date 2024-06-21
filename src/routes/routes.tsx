//* Libraries imports
import { createBrowserRouter, } from "react-router-dom";

//* Layout imports
import { PublicPages } from "@/layout/public-pages";

//* Pages imports
import { Home } from "@/pages/home";
import { Design } from "@/pages/Design";
import { Checkout } from "@/pages/checkout";
import { Contact } from "@/pages/contact";
import { Login } from "@/pages/login/Login";
import { Shop } from "@/pages/Shop";
import { ErrorPage } from "@/pages/ErrorPage";
import { ProductPage } from "@/pages/productpage/ProductPage";

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
        path: "product/:id",
        element: <ProductPage />,
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
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "error",
        element: <ErrorPage />,
      }
    ]
  },
]);

export { routers };