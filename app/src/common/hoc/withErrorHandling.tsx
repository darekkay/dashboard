import React from "react";

import log from "common/log";

export interface State {
  hasRenderError: boolean;
}

/** Catches errors within the wrapped component and passes "hasRenderError" down */
const withErrorHandling = <P extends object>(
  WrappedComponent: React.ComponentType<P & State>
) => {
  return class ErrorHandling extends React.Component<P> {
    state: State = {
      hasRenderError: false,
    };

    static getDerivedStateFromError() {
      return { hasRenderError: true };
    }

    componentDidCatch(error: Error) {
      log.error(error.message);
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          hasRenderError={this.state.hasRenderError}
        />
      );
    }
  };
};

export default withErrorHandling;
