import React from "react";

import Text from "widgets/text/Text";

const Empty = () => null;

interface Widgets {
  empty: React.ElementType;
  text: React.ElementType;
  [key: string]: React.ElementType;
}

// TODO: load widgets dynamically
const widgets: Widgets = {
  empty: Empty,
  text: Text
};

export default widgets;
