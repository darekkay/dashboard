import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import getThemeStyle from "common/themes";
import { actionCreators } from "common/ducks/settings";
import Button from "components/button/Button";
import Icon from "components/icon/Icon";
import { State } from "../../store";

import "./ThemeSelect.scss";

export interface Props {
  theme: string;
  changeTheme: (payload: any) => any; // TODO: type
}

export class ThemeSelect extends React.PureComponent<Props> {
  componentDidMount() {
    this.updateCssVariables();
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.theme !== this.props.theme) {
      this.updateCssVariables();
    }
  }

  updateCssVariables = () => {
    /* TODO: probably move to a side-effect library */
    document.documentElement.setAttribute(
      "style",
      getThemeStyle(this.props.theme)
    );
  };

  /* TODO: refactor to select all themes instead of toggling */
  getNextTheme = () => (this.props.theme === "default" ? "dark" : "default");

  toggleTheme = () => this.props.changeTheme(this.getNextTheme());

  render() {
    const { theme } = this.props;
    return (
      <Button className="m-2" type="primary" onClick={this.toggleTheme}>
        <Icon name="palette" position="left" />
        Theme: {theme}
      </Button>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    theme: state.config.theme
  };
};

/* TODO: type */
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSelect);
