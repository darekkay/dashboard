import React from "react";

import Text from "widgets/text/Text";
import DateTime from "widgets/date-time/DateTime";

interface Widgets {
  [key: string]: React.ElementType;
}

// TODO: load widgets dynamically
const widgets: Widgets = {
  text: Text,
  "date-time": DateTime
};

export default widgets;
