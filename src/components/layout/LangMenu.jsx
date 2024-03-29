import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownGroup,
  DropdownItem,
  DropdownLabel,
  DropdownTrigger,
} from "deep-ui-react";
import { HiOutlineTranslate } from "react-icons/hi";

function LangMenu() {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Avatar className="bg-primary/60" fallback={<HiOutlineTranslate />} />
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownGroup>
          <DropdownLabel className="capitalize">select language</DropdownLabel>
          <DropdownDivider />
          <DropdownItem>
            <img
              className="me-2"
              src="/images/eg.png"
              alt="eg flag"
              width={20}
              height={20}
            />
            Arabic
          </DropdownItem>
          <DropdownItem>
            <img
              className="me-2"
              src="/images/us.png"
              alt="us flag"
              width={20}
              height={20}
            />
            English
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  );
}

export default LangMenu;
