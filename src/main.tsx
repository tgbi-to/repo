import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in TGBI-TO Portal:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0d233a] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-amber-500/30 rounded-2xl p-6 text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl mb-4 border border-amber-500/40">
              TGBI
            </div>
            <h1 className="text-xl font-bold text-white mb-2">The Guardians Brotherhood, Inc.</h1>
            <p className="text-sm text-slate-300 mb-6">
              SEC Registration No. 123899 • Official Web Portal
            </p>
            <p className="text-xs text-slate-400 mb-6 bg-slate-800 p-3 rounded-lg border border-slate-700">
              The page encountered a temporary display issue. Click below to reload the portal.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#0038A8] hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow transition-colors"
            >
              Reload Official Portal
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
