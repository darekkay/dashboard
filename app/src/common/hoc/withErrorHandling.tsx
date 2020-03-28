import React from "react";

import log from "common/log";

export interface State {
  hasError: boolean;
}

/** Catches errors within the wrapped component and passes "hasError" down */
const withErrorHandling = <P extends object>(
  WrappedComponent: React.ComponentType<P & State>
) => {
  return class ErrorHandling extends React.Component<P> {
    state: State = {
      hasError: false
    };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: Error) {
      log.error(error.message);
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          hasError={this.state.hasError}
        />
      );
    }
  };
};

export default withErrorHandling;
