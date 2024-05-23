import React from "react";
import clsx from "clsx";
import {
  Menu as AriakitMenu,
  MenuButton,
  MenuItem,
  MenuProvider,
} from "@ariakit/react";

import Icon, { IconName } from "components/icon";

const Menu = ({ children, title, icon, disclosureClassName }: Props) => {
  return (
    <MenuProvider>
      <MenuButton
        aria-label={title}
        className={clsx(
          disclosureClassName,
          "btn",
          "btn-secondary",
          "btn-small"
        )}
      >
        <Icon name={icon} />
      </MenuButton>
      <AriakitMenu
        // store={menu}
        aria-label={title}
        className="z-20 min-w-250 overflow-hidden bg-default border rounded-lg shadow-xl outline-none no-focus"
        // Fixes Popper warning: https://github.com/react-bootstrap/react-bootstrap/issues/5081
        style={{ top: "5px" }}
      >
        {children}
      </AriakitMenu>
    </MenuProvider>
  );
};

export const MenuSeparator = () => <hr className="border-0 border-top m-0" />;

export const MenuAction = ({ text, icon, onClick, href }: MenuItemProps) => {
  return (
    <MenuItem
      key={text}
      className="block w-full flex items-center px-5 py-4 text-left text-3 text-default bg-default border-0 no-focus outline-none hover event:bg-offset cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
        if (href) window.open(href, "_blank");
      }}
    >
      <Icon name={icon} position="left" />
      <span>{text}</span>
    </MenuItem>
  );
};

export interface MenuItemProps {
  text: string;
  icon: IconName;
  onClick?: () => void;
  href?: string;
}

export interface Props {
  icon: IconName;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  disclosureClassName?: string;
}

export default Menu;
