import React, { Component, ComponentType } from "react";

const withLogging = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return class extends Component<P> {
    componentDidMount() {
      console.log(`${WrappedComponent.displayName || WrappedComponent.name} Mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogging;
