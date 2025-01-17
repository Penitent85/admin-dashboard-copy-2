import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import TopDoctors from "./components/doctor/TopDoctors.jsx";
import Patients from "./components/doctor/Patients.jsx";
import Clinics from "./components/doctor/Clinics.jsx";
import ViewDoctor from "./components/doctor/ViewDoctor.jsx";
import ModifyDoctor from "./components/doctor/ModifyDoctor.jsx";
import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import CreateDoctorComponent from "@/components/doctor/CreateDoctor.jsx";
import EditDoctorComponent from "./components/doctor/EditDoctor.jsx";
import ViewDoctorComponent from "@/components/doctor/ViewDoctor.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "doctors",
                    element: <TopDoctors />,
                },
                {
                    path: "doctors/create",
                    element: <CreateDoctorComponent />,
                },
                {
                    path: "doctors/view",
                    element: <ViewDoctorComponent />,ViewDoctor
                },
                {
                    path: "doctors/view/:id",
                    element: <ViewDoctor />,
                },
                {
                    path: "doctors/edit/:id",
                    element: <ModifyDoctor />,
                },
                {
                    path: "inactive",
                    element: <h1 className="title">Inactive Doctor</h1>,
                },
                {
                    path: "patients",
                    element: <Patients />,
                },
                {
                    path: "pharmacy",
                    element: <h1>fff</h1>,
                },
                {
                    path: "clinics",
                    element: <Clinics />,
                },
                {
                    path: "cites",
                    element: <h1 className="title">Cites </h1>,
                },
                {
                    path: "specialization",
                    element: <h1 className="title">Specialization </h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings </h1>,
                },
            ],
        },
    ]);
    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
