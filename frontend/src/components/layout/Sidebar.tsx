import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  PawPrint,
  Utensils,
  HeartPulse,
  BookOpen,
  CalendarDays,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
} from "lucide-react";

import "./Sidebar.css";
import type { Collapse } from "./MainLayout";

const menuItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Pet Profile", path: "/pet-profile", icon: PawPrint },
  { label: "Feeding", path: "/feeding", icon: Utensils },
  { label: "Health", path: "/health", icon: HeartPulse },
  { label: "Pet Diary", path: "/pet-diary", icon: BookOpen },
  { label: "Calendar", path: "/calendar", icon: CalendarDays },
];

export default function Sidebar({ isCollapsed, onToggle }: Collapse) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside
      className={`sidebar ${isCollapsed ? "sidebar--closed" : "sidebar--open"}`}
    >
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <div className="sidebar__logo">
            <PawPrint size={23} strokeWidth={2.2} />
          </div>

          {!isCollapsed && (
            <div className="sidebar__brand-text">
              <span className="sidebar__title">PetCare</span>
              <span className="sidebar__subtitle">Your pet companion</span>
            </div>
          )}
        </div>

        <button
          type="button"
          className="sidebar__toggle"
          onClick={() => onToggle(!isCollapsed)}
          aria-label={isCollapsed ? "Open sidebar" : "Close sidebar"}
          title={isCollapsed ? "Open sidebar" : "Close sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={19} />
          ) : (
            <PanelLeftClose size={19} />
          )}
        </button>
      </div>

      {isCollapsed && (
        <div className="sidebar__section-label">
          <span>MENU</span>
        </div>
      )}

      <nav className="sidebar__nav" aria-label="Main navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              className={`sidebar__item ${
                isActive ? "sidebar__item--active" : ""
              }`}
              onClick={() => navigate(item.path)}
              title={!isCollapsed ? item.label : undefined}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className="sidebar__item-icon"
                size={20}
                strokeWidth={1.8}
              />

              {!isCollapsed && (
                <span className="sidebar__item-label">{item.label}</span>
              )}

              {!isCollapsed && isActive && (
                <span className="sidebar__active-dot" />
              )}
            </button>
          );
        })}
      </nav>

      {!isCollapsed && (
        <div className="sidebar__bottom">
          <div className="sidebar__tip">
            <div className="sidebar__tip-icon">
              <Sparkles size={19} />
            </div>

            <p className="sidebar__tip-title">Little moments matter</p>

            <p className="sidebar__tip-text">
              Every day with your pet is special.
            </p>
          </div>

          <div className="sidebar__footer">
            Made with <span aria-label="love">♥</span> for pets
          </div>
        </div>
      )}
    </aside>
  );
}
