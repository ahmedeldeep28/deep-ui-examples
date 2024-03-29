import React from "react";
import {
  HiOutlineHome,
  HiOutlineDocumentDownload,
  HiOutlineViewGridAdd,
  HiOutlineSaveAs,
  HiOutlineArchive,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SidebarMenu() {
  return (
    <div>
      <div className="p-6 capitalize">
        <img className="w-28 m-auto" src="/images/brand.png" alt="logo" />
      </div>
      <ui className="sidebar-menu list-none">
        <li>
          <NavLink to={"/home"} className="sidebar-item">
            <HiOutlineHome className="text-xl" /> <span>home</span>
          </NavLink>
        </li>

        <li>
          <NavLink to={"/exports"} className="sidebar-item">
            <HiOutlineDocumentDownload className="text-xl" />
            <span>exports</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tickets/archive"} className="sidebar-item">
            <HiOutlineArchive className="text-xl" />
            <span>archive tickets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tickets/receive"} className="sidebar-item">
            <HiOutlineSaveAs className="text-xl" /> <span>receive tickets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tickets/add"} className="sidebar-item">
            <HiOutlineViewGridAdd className="text-xl" /> <span>add ticket</span>
          </NavLink>
        </li>
      </ui>
    </div>
  );
}

export default SidebarMenu;
