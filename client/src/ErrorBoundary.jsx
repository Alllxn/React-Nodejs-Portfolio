import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--primario)' }}>Something went wrong.</h2>
                    <button style={{ color: 'black' }} onClick={() => this.setState({ hasError: false })}>
                        Try again
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
