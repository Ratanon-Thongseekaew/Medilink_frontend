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
import AdminOnlineStore from "../pages/Admin/AdminOnlineStore";
import AdminAppointment from "../pages/Admin/AdminAppointment";
import AdminDoctorManage from "../pages/Admin/AdminDoctorManage";
import AdminHospital from "../pages/Admin/AdminHospital";
import UserProfile from "../pages/Admin/userProfile/UserProfile";
import AdminListPackage from "../pages/Admin/package/AdminListPackage";
import AdminCreatePackage from "../pages/Admin/package/AdminCreatePackage";
import DoctorProfile from "../pages/Admin/doctor/DoctorProfile";
import HospitalProfile from "../pages/Admin/hospital/hospitalProfile";
import ThankyouAppointment from "../pages/ThankyouAppointment";
import Package from "../pages/Package";
import ThankyouPackage from "../pages/ThankyouPackage";
import SelectDoctor from "../pages/SelectDoctor";
import Checkout from "../components/Checkout";
import CheckoutComplete from "../components/CheckoutComplete";
import UserCreateProfile from "../pages/Admin/userProfile/UserCreateProfile";
import DoctorCreateProfile from "../pages/Admin/doctor/DoctorCreateProfile";
import HospitalCreateProfile from "../pages/Admin/hospital/HospitalCreateProfile";

const guestRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <Navigate to="/" /> },
])

const userRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
  
        { index: true, element: <Checking /> },
        { path: "/appointment/:doctorId", element: <Appointment /> },
        { path: "/select-doctor", element: <SelectDoctor /> },
        { path: "/thankyou-appointment", element: <ThankyouAppointment /> },
                 {path: "/checkout", element: <Checkout />},
   {path: "/checkout-complete/:session", element: <CheckoutComplete />},
        { path: "/thankyou-package", element: <ThankyouPackage /> },
        { path: "/package/:id", element: <Package /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ]);

  const adminRouter = createBrowserRouter([
    {
      path: "/",
      element: <LayoutAdmin />,
      children: [
        { index: true, element: <AdminHome /> },
        { path: "/admin/dashboard", element: <Dashboard /> },
        { path: "/admin/user", element: <AdminUser /> },
        { path: "/admin/user-profile/:id", element: <UserProfile /> },
        { path: "/admin/user-create-profile", element: <UserCreateProfile /> },
        { path: "/admin/online-store", element: <AdminOnlineStore /> },
        { path: "/admin/list-package", element: <AdminListPackage /> },
        { path: "/admin/create-package", element: <AdminCreatePackage /> },
        { path: "/admin/appointment", element: <AdminAppointment /> },
        { path: "/admin/doctor-manage", element: <AdminDoctorManage /> },
        { path: "/admin/doctor-profile", element: <DoctorProfile /> },
        {
          path: "/admin/doctor-create-profile",
          element: <DoctorCreateProfile />,
        },
        { path: "/admin/hospital", element: <AdminHospital /> },
        { path: "/admin/hospita-profile/:id", element: <HospitalProfile /> },
        {
          path: "/admin/hospital-create-profile",
          element: <HospitalCreateProfile />,
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ]);

export default function AppRouter() {
  const user = useUserStore((state) => state.user);
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
