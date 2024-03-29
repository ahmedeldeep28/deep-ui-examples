import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => setIsOpenSidebar(true);
  const closeSidebar = () => setIsOpenSidebar(false);
  return (
    <div className="container p-0 grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
      <Sidebar isActive={isOpenSidebar} closeSidebar={closeSidebar} />
      <main className="overflow-auto">
        <Navbar openSidebar={openSidebar} />
        <div className="container p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
