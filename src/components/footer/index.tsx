import React, { memo } from "react";

import ThemeSelect from "components/theme-select";
import Link from "components/link";

import Button from "../button";
import Icon from "../icon";

const Version = memo(() => (
  <div>
    <Link url="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
    {process.env.REACT_APP_VERSION}
  </div>
));

export interface Props {
  isLayoutEditable: boolean;
  toggleLayoutEditable: () => void;
}

const Footer = memo(({ isLayoutEditable, toggleLayoutEditable }: Props) => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between p-5 border-top bg-color-footer">
      <div>
        <Button className="m-2" type="primary" onClick={toggleLayoutEditable}>
          <Icon name="edit" position="left" />
          {isLayoutEditable ? "Save" : "Edit"}
        </Button>
        <ThemeSelect />
      </div>
      <Version />
    </footer>
  );
});

export default Footer;
