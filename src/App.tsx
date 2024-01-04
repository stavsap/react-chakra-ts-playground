import "./styles.css";
import { BsBarChart } from "react-icons/bs";
import { BiMap, BiChalkboard } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import {
  SidenavProvider,
  SidenavContainer,
  SidenavItem,
  Sidenav
} from "./components/sidenav";
import { Navbar } from "./components/navbar/navbar";

export default function App() {
  const navItems: SidenavItem[] = [
    { icon: BsBarChart, label: "Dashboard", to: "" },
    { icon: BiChalkboard, label: "Forecast", to: "forecast" },
    { icon: BiMap, label: "Location", to: "location" },
    { icon: FiSettings, label: "Settings", to: "settings" }
  ];
  return (
      <SidenavProvider>
        <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
          <Navbar />
          <main>
            <div className="App">
              <Outlet />
            </div>
          </main>
        </SidenavContainer>
      </SidenavProvider>
  );
}
