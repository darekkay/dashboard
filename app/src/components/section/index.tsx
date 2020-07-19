import React from "react";

import Headline from "components/headline";

/* Makes possible changes easier */
export type SectionType = "modal" | "story";

const Section: React.FC<Props> = ({ headline, children }) => {
  return (
    <div>
      {headline && (
        <Headline level={3} className="mb-4 text-3 font-semibold">
          {headline}
        </Headline>
      )}
      <div className="mx-5 space-y-6">{children}</div>
    </div>
  );
};

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  type: SectionType;
  headline?: string;
}

export default Section;
