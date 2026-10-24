import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import "./MainLayout.css";
import { useState } from "react";

const pageInfo: Record<string, { title: string; subtitle: string }> = {
  "/": {
    title: "Dashboard",
    subtitle: "Here's what's happening with your pets today.",
  },
  "/pet-profile": {
    title: "Pet Profile",
    subtitle: "Get to know your lovely companion.",
  },
  "/feeding": {
    title: "Feeding",
    subtitle: "Keep track of your pet's daily nutrition.",
  },
  "/health": {
    title: "Health",
    subtitle: "Take care of your pet's health and wellness.",
  },
  "/pet-diary": {
    title: "Pet Diary",
    subtitle: "Save the little moments that matter.",
  },
  "/calendar": {
    title: "Calendar",
    subtitle: "Stay on top of important dates and reminders.",
  },
};

export interface Collapse {
  isCollapsed: boolean;
  onToggle: (collapsed: boolean) => void;
}

export default function MainLayout() {
  const location = useLocation();
  const currentPage = pageInfo[location.pathname] ?? pageInfo["/"];
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="main-layout">
      <Sidebar isCollapsed={isCollapsed} onToggle={setIsCollapsed} />

      <div
        className={`main-layout__content ${
          isCollapsed ? "main-layout__content--collapsed" : ""
        }`}
      >
        <Header title={currentPage.title} subtitle={currentPage.subtitle} />

        <main className="main-layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
