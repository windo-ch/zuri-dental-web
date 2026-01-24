import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders without crashing', () => {
    render(<LoadingSpinner />);
    // The spinner should be in the document
    const spinner = document.querySelector('div[role="status"]');
    expect(spinner).toBeInTheDocument();
  });

  test('uses default size when no size prop is provided', () => {
    render(<LoadingSpinner />);
    const spinner = document.querySelector('.w-8.h-8');
    expect(spinner).toBeInTheDocument();
  });

  test('applies small size class when size prop is sm', () => {
    render(<LoadingSpinner size="sm" />);
    const spinner = document.querySelector('.w-5.h-5');
    expect(spinner).toBeInTheDocument();
  });

  test('applies large size class when size prop is lg', () => {
    render(<LoadingSpinner size="lg" />);
    const spinner = document.querySelector('.w-12.h-12');
    expect(spinner).toBeInTheDocument();
  });

  test('applies custom class when className prop is provided', () => {
    render(<LoadingSpinner className="custom-class" />);
    const container = document.querySelector('.custom-class');
    expect(container).toBeInTheDocument();
  });
}); 