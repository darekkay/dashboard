import React from "react";
import cn from "classnames";

/* Makes possible changes easier */
export type SectionType = "app" | "story";

const Section = ({ headline, type, children }: Props) => {
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
