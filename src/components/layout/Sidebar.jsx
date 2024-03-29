import React from "react";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

import { Button } from "deep-ui-react";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* close button */}
      <div className="flex md:hidden p-3">
        <Button variant="soft">
          <HiOutlineChevronDoubleLeft className="rtl:rotate-180" /> close
        </Button>
      </div>
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
