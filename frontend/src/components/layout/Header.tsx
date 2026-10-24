import { Search, Bell, ChevronDown } from "lucide-react";
import "./Header.css";

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

export default function Header({
  title = "Dashboard",
  subtitle = "Here's what's happening with your pets today.",
}: HeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__heading">
        <h1 className="app-header__title">{title}</h1>
        <p className="app-header__subtitle">{subtitle}</p>
      </div>

      <div className="app-header__actions">
        <label className="app-header__search">
          <Search size={18} />
          <input type="search" placeholder="Search anything..." />
          <kbd>⌘ K</kbd>
        </label>

        <button
          type="button"
          className="app-header__notification"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="app-header__notification-dot" />
        </button>

        <button
          type="button"
          className="app-header__profile"
          aria-label="User profile"
        >
          <div className="app-header__avatar">U</div>

          <div className="app-header__user-info">
            <span className="app-header__user-name">Pet Parent</span>
            <span className="app-header__user-role">Pet Owner</span>
          </div>

          <ChevronDown size={16} className="app-header__chevron" />
        </button>
      </div>
    </header>
  );
}
