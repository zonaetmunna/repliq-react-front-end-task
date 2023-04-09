import { createBrowserRouter } from "react-router-dom";
import Main from "../view/layout/Main";
import Home from "../view/pages/main/Home";
import Login from "../view/pages/main/Login";
import Register from "../view/pages/main/Register";
import Dashboards from "../view/layout/Dashboards";
import AdminDashboard from "../view/pages/dashboard/AdminDashboard";
import CustomersList from "../view/pages/dashboard/CustomersList";
import ProductList from "../view/pages/dashboard/ProductList";
import OrderList from "../view/pages/dashboard/OrderList";
import SingleProduct from "../view/pages/main/SingleProduct";
import Cart from "../view/pages/main/Cart";
import Checkout from "../view/pages/main/Checkout";
import Error from "../view/layout/Error";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../view/pages/dashboard/AddProduct";
import AdminRoute from "./AdminRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },

      {
        path: "/register",
        element: (
          <AdminRoute>
            <Register />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboards />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "customer-list",
        element: <CustomersList />,
      },

      {
        path: "product-add",
        element: <AddProduct />,
      },

      {
        path: "product-list",
        element: <ProductList />,
      },
      {
        path: "order-list",
        element: <OrderList />,
      },
    ],
  },
]);

export default routes;
