import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "common/ducks/config";
import Input from "components/forms/input";

import selectComponentProps from "./selectors";

export const BackgroundSelect: React.FC<Props> = (props) => {
  const { backgroundUrl, changeBackgroundUrl } = props;
  return (
    <Input
      value={backgroundUrl}
      setValue={(backgroundUrlValue) => changeBackgroundUrl(backgroundUrlValue)}
    />
  );
};

export interface Props {
  backgroundUrl: string;
  changeBackgroundUrl: (payload: string) => void;
}

export default connect(selectComponentProps, actionCreators)(BackgroundSelect);
