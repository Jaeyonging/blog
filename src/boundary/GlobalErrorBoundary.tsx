import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './ErrorFallback';

const GlobalErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {

            }}
        >
            {children}
        </ErrorBoundary>
    );
};

export default GlobalErrorBoundary;
