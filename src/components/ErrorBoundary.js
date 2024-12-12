// src/components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Đã xảy ra lỗi. Vui lòng thử lại sau.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
