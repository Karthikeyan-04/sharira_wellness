import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-6">
            <h1 className="font-display text-4xl text-forest-dark">Something went wrong</h1>
            <p className="text-gray-600 font-body">
              We encountered an unexpected error. Please try refreshing the page or returning to the home screen.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-forest-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-forest transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
