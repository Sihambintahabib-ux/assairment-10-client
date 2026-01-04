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
import DashboardLayout from "./Components/page/DashboardLayout.jsx";
// Create a client
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Statistics from "./Components/Layout/Dashboard/Statistics.jsx";
import Profile from "./Components/Layout/Dashboard/statistics/Common/Profile.jsx";
const queryClient = new QueryClient();
// tanstack devtoosl
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>error found</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/latest-products`),
      },
      {
        path: "/allproducts",
        Component: AllProducts,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/products`),
      },
      {
        path: "/productsdetails/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),

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
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateImport></UpdateImport>
          </PrivateRoute>
        ),
      },

      {
        path: "/updateExport/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/products/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateExport></UpdateExport>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-export", // member
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <Exports></Exports>
          </PrivateRoute>
        ),
      },
      {
        path: "my-imports", // member
        element: (
          <PrivateRoute>
            {/* <MyOrders /> */}
            <Imports></Imports>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

      <ToastContainer />
      {/* devtoosl */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>
);
