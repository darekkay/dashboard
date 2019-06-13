import React from "react";

import Text from "widgets/text";
import DateTime from "widgets/date-time";

interface Widgets {
  [key: string]: React.ElementType;
}

// TODO: load widgets dynamically
const widgets: Widgets = {
  text: Text,
  "date-time": DateTime
};

export default widgets;
