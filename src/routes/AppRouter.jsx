import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import useUserStore from "../stores/userStore";
import Checking from "../pages/Checking";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";

const guestRouter = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "*", element: <Navigate to="/" />},
])

const userRouter = createBrowserRouter([
    {
    path: "/", element: <App />,
    children: [
        {index: true, element: <Checking />},
        {path: "/appointment", element: <Appointment />},
        {path: "*", element: <Navigate to="/" />}
       ]
    },
])

const adminRouter = createBrowserRouter([
    {
        path: "/", element: <p>Admin</p>,
        children: [
            {index: true, element: <p>Admin Home</p>},
            {path: "/dashboard", element: <p>Dashboard</p>},
            {path: "*", element: <Navigate to="/" />}
        ]
    }
])

export default function AppRouter() {
    const user = useUserStore(state => state.user)

    const finalRouter = !user
        ? guestRouter
        : user.role === "USER"
        ? userRouter
        : user.role === "ADMIN"
        ? adminRouter
        : guestRouter;
    
    return (
        <RouterProvider key={user?.id} router={finalRouter} />
    )
}