import React from "react";
import {
  useMenuState,
  Menu as ReakitMenu,
  MenuDisclosure,
  MenuItem,
  MenuStateReturn
} from "reakit/Menu";
import _ from "lodash";

import Icon from "components/icon";
import Button, { ButtonSize } from "components/button";

// @ts-ignore default value is defined in the context provider
const MenuContext = React.createContext<MenuStateReturn>({});

const Menu: React.FC<Props> = ({
  children,
  title,
  icon,
  disclosureClassName
}) => {
  const menu = useMenuState();
  return (
    <>
      <MenuDisclosure
        {...menu}
        aria-label={title}
        className={disclosureClassName}
        as={Button}
        size={ButtonSize.Small}
        outline
      >
        <Icon name={icon} />
      </MenuDisclosure>
      <ReakitMenu
        {...menu}
        aria-label={title}
        className="z-20 min-w-250 bg-color-panel border outline-none"
      >
        <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>
      </ReakitMenu>
    </>
  );
};

const useMenuContext = () => {
  const context = React.useContext<MenuStateReturn>(MenuContext);
  if (_.isEmpty(context)) {
    throw new Error(
      "Menu compound components cannot be rendered outside the Menu component"
    );
  }
  return context;
};

export const MenuSeparator: React.FC<{}> = () => (
  <hr className="border-0 border-top m-0" />
);

export const MenuAction: React.FC<MenuItemProps> = ({
  text,
  icon,
  onClick,
  href
}) => {
  const menu = useMenuContext();
  return (
    <MenuItem
      {...menu}
      key={text}
      className="block w-full flex p-4 text-left text-2 text-color-default bg-color-panel border-0 no-focus outline-none hover event:bg-color-dim cursor-pointer"
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
  icon: string;
  onClick?: () => void;
  href?: string;
}

export interface Props {
  icon: string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
  disclosureClassName?: string;
}

export default Menu;
