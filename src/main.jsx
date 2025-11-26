import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/page/Home.jsx";
import AllProducts from "./Components/page/AllProducts.jsx";
import ProductsDetails from "./Components/page/ProductsDetails.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Login from "./Components/page/Login.jsx";
import Signup from "./Components/page/Signup.jsx";
import Exports from "./Components/page/Exports.jsx";
import Imports from "./Components/page/Imports.jsx";
import Exportsrouts from "./Components/page/Exportsrouts.JSX";
import PrivateRoute from "./Context/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import UpdateImport from "./Components/page/UpdateImport.jsx";
import UpdateExport from "./Components/page/UpdateExport.jsx";
import Forgetpassword from "./Components/page/Forgetpassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>error found</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/latest-products"),
      },
      {
        path: "/allproducts",
        Component: AllProducts,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/productsdetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),

        element: (
          <PrivateRoute>
            <ProductsDetails></ProductsDetails>
          </PrivateRoute>
        ),
      },

      // { path: "productsdetails", Component: ProductsDetails },
      { path: "/signup", Component: Signup },
      { path: "/login", Component: Login },
      { path: "/forgetpassword", Component: Forgetpassword },
      {
        path: "/exportsrouts",
        element: (
          <PrivateRoute>
            <Exportsrouts></Exportsrouts>
          </PrivateRoute>
        ),
      },
      {
        path: "/export",
        element: (
          <PrivateRoute>
            <Exports></Exports>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-imports",
        // path: "/import",
        element: (
          <PrivateRoute>
            <Imports></Imports>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateImport/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateImport></UpdateImport>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateExport/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateExport></UpdateExport>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
