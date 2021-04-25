import React, { useState } from "react";

import Button from "components/button";
import Section from "components/section";

import usePrevious from "../usePrevious";
import useInterval from "../useInterval";

export default {
  title: "Common/Hooks",
};

export const UsePrevious = () => {
  const [counter, setCounter] = useState(0);
  const previousValue = usePrevious(counter);

  return (
    <Section headline="usePrevious hook" type="story">
      <div>
        Current value: <strong>{counter}</strong>
      </div>
      <div>
        Previous value: <strong>{previousValue}</strong>
      </div>
      <div>
        <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
      </div>
    </Section>
  );
};

UsePrevious.story = {
  name: "usePrevious",
};

export const UseInterval = () => {
  const [counter, setCounter] = useState(0);
  useInterval(() => setCounter(counter + 1), 1000);

  return (
    <Section headline="useInterval hook" type="story">
      <div>
        Current value: <strong>{counter}</strong>
      </div>
    </Section>
  );
};

UseInterval.story = {
  name: "useInterval",
};
