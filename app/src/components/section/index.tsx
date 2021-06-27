import React from "react";
import cn from "classnames";

import Headline from "components/headline";

/* Makes possible changes easier */
export type SectionType = "modal" | "story";

const Section: React.FC<Props> = ({ headline, type, children }) => {
  return (
    <div>
      {headline && (
        <h3
          className={cn("mb-4 text-4 font-bold", {
            "mt-7 text-center": type === "story",
          })}
        >
          {headline}
        </h3>
      )}
      <div className="space-y-6">{children}</div>
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
