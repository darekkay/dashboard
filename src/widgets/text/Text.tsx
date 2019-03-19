import React from "react";

const Text = ({ content }: Props) => {
  return <div className="text">{content}</div>;
};

export interface Props {
  content?: string;
}

Text.defaultProps = {};

export default Text;
