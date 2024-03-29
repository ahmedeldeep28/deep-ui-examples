import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
} from "deep-ui-react";
import { Link } from "react-router-dom";

function ProfileMenu() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Avatar
          src="https://ui.shadcn.com/avatars/01.png"
          className="bg-primary/50"
        />
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownGroup>
          <DropdownLabel className="capitalize">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">shadcn</p>
              <p className="text-xs leading-none text-muted-foreground">
                m@example.com
              </p>
            </div>
          </DropdownLabel>
          <DropdownDivider />
          <DropdownItem asChild>
            <Link to="/">Profile</Link>
          </DropdownItem>
          <DropdownItem disabled>Billing</DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>Settings</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>Change Password</DropdownItem>
              <DropdownItem>Update Profile</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownItem className="focus:bg-danger/20 focus:text-danger">
            Log out
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  );
}

export default ProfileMenu;
