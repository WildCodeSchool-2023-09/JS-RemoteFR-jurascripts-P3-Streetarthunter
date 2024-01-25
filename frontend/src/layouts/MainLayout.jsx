import { Outlet } from "react-router-dom";
import NavbarM from "../components/NavBarM";
import NavBarAdmin from "../components/NavBarAdmin";

export default function Mainlayout() {
  return (
    <>
      <header>
        <NavBarAdmin />

        <NavbarM />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
