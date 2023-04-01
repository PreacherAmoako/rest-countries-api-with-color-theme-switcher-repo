import { createBrowserRouter } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import CountryDetails from "./pages/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCountries />,
  },
  {
    path: "/:commonName",
    element: <CountryDetails />,
  },
]);

export { router };
