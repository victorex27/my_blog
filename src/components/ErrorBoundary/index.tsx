import { Component } from "react";

interface StateInterface {
    hasError: boolean;
}

interface PropsInterface {
    children: React.ReactNode;
}

class ErrorBoundary extends Component<PropsInterface,StateInterface> {
  constructor(props: React.PropsWithChildren<PropsInterface>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:any) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;