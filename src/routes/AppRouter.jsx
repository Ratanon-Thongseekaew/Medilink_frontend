import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import useUserStore from "../stores/userStore";
import Checking from "../pages/Checking";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import LayoutAdmin from "../components/LayoutAdmin";
import Dashboard from "../pages/Admin/Dashboard";
import AdminHome from "../pages/Admin/AdminHome";
import AdminUser from "../pages/Admin/AdminUser";
import AdminOnlineStore from "../pages/Admin/AminOnlineStore";
import AdminAppointment from "../pages/Admin/AdminAppointment";
import AdminDoctorManage from "../pages/Admin/AdminDoctorManage";
import AdminHospital from "../pages/Admin/AdminHospital";

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
        path: "/admin", element: <LayoutAdmin/>,
        children: [
            {index: true, element: <AdminHome />},
            {path: "/admin/dashboard", element:<Dashboard />},
            {path: "/admin/user", element:<AdminUser />},
            {path: "/admin/online-store", element:<AdminOnlineStore/>},
            {path: "/admin/appointment", element:<AdminAppointment/>},
            {path: "/admin/doctor-manage", element:<AdminDoctorManage />},
            {path: "/admin/hospital", element:<AdminHospital />},
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