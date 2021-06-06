import React from "react";

import Section from "components/section";

export default {
  title: "Common",
};

export const StyleGuide = () => (
  <div className="space-y-6 pl-3">
    <Section headline="Text colors" type="story">
      <ul className="ml-5 list-style-none">
        <li className="text-default">.text-default</li>
        <li className="text-offset">.text-offset</li>
        <li className="text-accent">.text-accent</li>
        <li className="text-interaction">.text-interaction</li>
        <li className="text-danger">.text-danger</li>
        <li className="text-success">.text-success</li>
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
