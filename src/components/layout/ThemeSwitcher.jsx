import React from "react";
import {
  Avatar,
  FormControl,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioCard,
  RadioGroup,
} from "deep-ui-react";
import { HiOutlineColorSwatch } from "react-icons/hi";
import useTheme from "./../../hooks/useTheme";

function ThemeSwitcher() {
  const { theme, updateTheme } = useTheme();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="bg-primary/60" fallback={<HiOutlineColorSwatch className="text-xl" />} />
      </PopoverTrigger>
      <PopoverContent>
        <FormControl className="mb-0">
          <Label htmlFor="theme">change theme</Label>
          <RadioGroup
            id="theme"
            className="grid grid-cols-2 *:w-full *:p-1"
            defaultValue={theme}
            onValueChange={(value) => updateTheme(value)}
          >
            <RadioCard value="system">system</RadioCard>
            <RadioCard value="dark">dark</RadioCard>
            <RadioCard value="orange">orange</RadioCard>
            <RadioCard value="zinc">zinc</RadioCard>
            <RadioCard value="elgant">elgant</RadioCard>
            <RadioCard value="playful">playful</RadioCard>
          </RadioGroup>
        </FormControl>
      </PopoverContent>
    </Popover>
  );
}

export default ThemeSwitcher;
