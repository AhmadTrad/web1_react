import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/Inbox";
import LogoutIcon from "@mui/icons-material/Logout";

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon fontSize="small" /> },
  { label: "Users", icon: <PeopleIcon fontSize="small" /> },
  { label: "Analytics", icon: <BarChartIcon fontSize="small" /> },
  { label: "Inbox", icon: <InboxIcon fontSize="small" /> },
  { label: "Settings", icon: <SettingsIcon fontSize="small" /> },
];

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-60" : "w-16"
        } bg-slate-900 text-white flex flex-col transition-all duration-300 ease-in-out shrink-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          {sidebarOpen && (
            <span className="text-lg font-bold tracking-wide truncate">
              MyApp
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-md hover:bg-slate-700 transition-colors ml-auto"
          >
            {sidebarOpen ? (
              <ChevronLeftIcon fontSize="small" />
            ) : (
              <MenuIcon fontSize="small" />
            )}
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveItem(item.label)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    activeItem === item.label
                      ? "bg-indigo-600 text-white"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {sidebarOpen && (
                    <span className="truncate">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-700 py-3 px-2">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
            <span className="shrink-0">
              <LogoutIcon fontSize="small" />
            </span>
            {sidebarOpen && <span className="truncate">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors md:hidden"
            >
              <MenuIcon fontSize="small" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              {activeItem}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <NotificationsIcon fontSize="small" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <AccountCircleIcon />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                John Doe
              </span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-3 shrink-0">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
