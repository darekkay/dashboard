import React from "react";

const WidgetError: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center h-full text-color-danger">
      » Error «
    </div>
  );
};

export interface Props {
  //
}

export default WidgetError;
