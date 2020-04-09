import React, { useState } from "react";

import { storiesOf } from "@storybook/react";

import Button from "components/button";
import Section from "components/section";

import usePrevious from "../usePrevious";
import useInterval from "../useInterval";

storiesOf("Common.Hooks", module)
  .add("usePrevious", () => {
    const [counter, setCounter] = useState(0);
    const previousValue = usePrevious(counter);

    return (
      <Section headline="usePrevious hook" type="story">
        <div className="mb-3">
          Current value: <strong>{counter}</strong>
        </div>
        <div className="mb-3">
          Previous value: <strong>{previousValue}</strong>
        </div>
        <div>
          <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
        </div>
      </Section>
    );
  })
  .add("useInterval", () => {
    const [counter, setCounter] = useState(0);
    useInterval(() => setCounter(counter + 1), 1000);

    return (
      <Section headline="useInterval hook" type="story">
        <div className="mb-3">
          Current value: <strong>{counter}</strong>
        </div>
      </Section>
    );
  });
