//* Libraries imports
import { RouterProvider } from "react-router-dom";

//* Routes imports
import { routers } from "./routes";

export const Routes = () => {
  return <RouterProvider router={routers} />;
};