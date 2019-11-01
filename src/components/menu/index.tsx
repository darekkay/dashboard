import React, { memo } from "react";
import {
  useMenuState,
  Menu as ReakitMenu,
  MenuDisclosure,
  MenuItem
} from "reakit/Menu";
import cn from "classnames";

import Icon from "components/icon";

const Menu: React.FC<Props> = memo(
  ({ items, title, icon, disclosureClassName }) => {
    const menu = useMenuState();
    return (
      <>
        <MenuDisclosure
          {...menu}
          aria-label={title}
          className={cn("btn btn-unstyled btn-small", disclosureClassName)}
        >
          <Icon className="text-color-highlight" name={icon} />
        </MenuDisclosure>
        <ReakitMenu
          {...menu}
          aria-label={title}
          className="z-10 min-w-250 bg-color-panel border outline-none"
        >
          {items.map((item, index) => {
            if (item === "separator")
              return <hr key={index} className="border-0 border-top m-0" />;
            return (
              <MenuItem
                {...menu}
                key={item.text}
                className="block w-full flex p-4 text-left text-2 text-color-default bg-color-panel border-0 no-focus outline-none hover event:bg-color-dim cursor-pointer"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  if (item.href) window.open(item.href, "_blank");
                  menu.hide();
                }}
              >
                <Icon name={item.icon} position="left" />
                <span>{item.text}</span>
              </MenuItem>
            );
          })}
        </ReakitMenu>
      </>
    );
  }
);

export interface MenuItemProps {
  text: string;
  icon: string;
  onClick?: () => void;
  href?: string;
}

export interface Props {
  icon: string;
  title: string;
  items: (MenuItemProps | "separator")[];
  disclosureClassName?: string;
}

export default Menu;
