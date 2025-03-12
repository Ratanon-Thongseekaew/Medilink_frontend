import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";

const guestRouter = createBrowserRouter([
    {path: "/", element: <p>Home</p>},
    {path: "/login", element: <p>Login</p>},
    {path: "/register", element: <p>Register</p>},
])

const userRouter = createBrowserRouter([
    {
    path: "/", element: <App />,
    children: [
        {index: true, element: <p>Checking</p>},
        {path: "/appointment", element: <p>Appointment</p>},
       ]
    },
])

export default function AppRouter() {
    const user = "Andy"
    const finalRouter = user ? userRouter : guestRouter
    return (
        <RouterProvider key={user} router={finalRouter} />
    )
}