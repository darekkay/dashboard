import React from "react";

import Section from "components/section";

export default {
  title: "Common",
};

export const StyleGuide = () => (
  <div className="space-y-6 pl-3">
    <Section headline="Text colors" type="story">
      <ul className="ml-5 list-style-none">
        <li className="text-color-default">.text-color-default</li>
        <li className="text-color-offset">.text-color-offset</li>
        <li className="text-color-primary">.text-color-primary</li>
        <li className="text-color-highlight">.text-color-highlight</li>
        <li className="text-color-danger">.text-color-danger</li>
        <li className="text-color-success">.text-color-success</li>
      </ul>
    </Section>

    <Section headline="Font weight" type="story">
      <ul className="ml-5 list-style-none">
        <li className="font-light">.font-light</li>
        <li className="font-normal">.font-normal</li>
        <li className="font-semibold">.font-semibold</li>
        <li className="font-bold">.font-bold</li>
      </ul>
    </Section>

    <Section headline="Font size" type="story">
      <ul className="ml-5 list-style-none">
        <li className="text-0">.text-0</li>
        <li className="text-1">.text-1</li>
        <li className="text-2">.text-2</li>
        <li className="text-3">.text-3</li>
        <li className="text-4">.text-4</li>
        <li className="text-5">.text-5</li>
        <li className="text-6">.text-6</li>
        <li className="text-7">.text-7</li>
      </ul>
    </Section>
  </div>
);
