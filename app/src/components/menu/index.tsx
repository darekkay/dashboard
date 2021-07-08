import React from "react";
import {
  useMenuState,
  Menu as ReakitMenu,
  MenuButton,
  MenuItem,
  MenuStateReturn,
} from "reakit/Menu";
import isEmpty from "lodash/isEmpty";

import Icon, { IconName } from "components/icon";
import Button from "components/button";

// @ts-expect-error default value is defined in the context provider
const MenuContext = React.createContext<MenuStateReturn>({});

const Menu: React.FC<Props> = ({
  children,
  title,
  icon,
  disclosureClassName,
}) => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton
        {...menu}
        aria-label={title}
        className={disclosureClassName}
        as={Button}
        size="small"
        variant="secondary"
      >
        <Icon name={icon} />
      </MenuButton>
      <ReakitMenu
        {...menu}
        aria-label={title}
        className="z-20 min-w-250 mt-2 overflow-hidden bg-default border rounded-lg shadow-xl outline-none no-focus"
      >
        <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>
      </ReakitMenu>
    </>
  );
};

const useMenuContext = () => {
  const context = React.useContext<MenuStateReturn>(MenuContext);
  if (isEmpty(context)) {
    throw new Error(
      "Menu compound components cannot be rendered outside the Menu component"
    );
  }
  return context;
};

export const MenuSeparator: React.FC = () => (
  <hr className="border-0 border-top m-0" />
);

export const MenuAction: React.FC<MenuItemProps> = ({
  text,
  icon,
  onClick,
  href,
}) => {
  const menu = useMenuContext();
  return (
    <MenuItem
      {...menu}
      key={text}
      className="block w-full flex items-center px-5 py-4 text-left text-3 text-default bg-default border-0 no-focus outline-none hover event:bg-offset cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
        if (href) window.open(href, "_blank");
        menu.hide();
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
