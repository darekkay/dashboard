import React from "react";

import ThemeSelect from "components/theme-select/ThemeSelect";
import Link from "components/link/Link";

import "./Footer.scss";

const Version = () => (
  <div>
    <Link url="https://github.com/darekkay/dashboard">Dashboard</Link>{" "}
    {process.env.REACT_APP_VERSION}
  </div>
);

const Footer = () => {
  return (
    <footer className="footer p-5 border-top">
      <ThemeSelect />
      <Version />
    </footer>
  );
};

export default Footer;
