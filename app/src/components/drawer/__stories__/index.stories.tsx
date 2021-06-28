import React from "react";

import Drawer from "../index";

export default {
  title: "Components/Drawer",
};

export const Variants = () => {
  return (
    <div>
      <Drawer addWidgetToLayout={() => null} onWidgetAdded={() => null} />
    </div>
  );
};
