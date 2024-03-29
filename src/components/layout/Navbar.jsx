import React from "react";
import LangMenu from "./LangMenu";
import ProfileMenu from "./ProfileMenu";
import { Button, Drawer, DrawerContent, DrawerTrigger } from "deep-ui-react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SidebarMenu from "./SidebarMenu";
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  return (
    <header className="sticky py-3 top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="flex md:hidden"
                  variant="soft"
                  size="sm"
                  isIconOnly
                >
                  <HiOutlineMenuAlt1 />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="w-[260px] py-4" side={"left"}>
                <SidebarMenu />
              </DrawerContent>
            </Drawer>
            <p>ticket support</p>
          </div>
          <div className="flex gap-3 items-center">
            <ThemeSwitcher />
            <LangMenu />
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
