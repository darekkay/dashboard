import React from "react";

import Text from "widgets/text/Text";

interface Widgets {
  [key: string]: React.ElementType;
}

// TODO: load widgets dynamically
const widgets: Widgets = {
  text: Text
};

export default widgets;
