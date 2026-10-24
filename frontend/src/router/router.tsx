import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import PetProfile from "../pages/PetProfile/PetProfile";
import Feeding from "../pages/Feeding/Feeding";
import Health from "../pages/Health/Health";
import PetDiary from "../pages/PetDiary/PetDiary";
import Calendar from "../pages/Calendar/Calendar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "pet-profile",
        element: <PetProfile />,
      },
      {
        path: "feeding",
        element: <Feeding />,
      },
      {
        path: "health",
        element: <Health />,
      },
      {
        path: "pet-diary",
        element: <PetDiary />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);

export default router;
