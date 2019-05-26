import React, { memo } from "react";

import ThemeSelect from "components/theme-select/ThemeSelect";
import Link from "components/link/Link";

import "./Footer.scss";
import Button from "../button/Button";
import Icon from "../icon/Icon";

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
    <footer className="footer p-5 border-top">
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
