import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DownloadButton from '../components/DownloadButton';

describe('DownloadButton', () => {
  it('renders children inside the button', () => {
    render(
      <DownloadButton href="/test.pdf" download="test.pdf">
        <span>Download CV</span>
      </DownloadButton>
    );

    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('renders a button element', () => {
    render(
      <DownloadButton href="/assets/cv.pdf" download="cv.pdf">
        Download
      </DownloadButton>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with the correct CSS class from module', () => {
    const { container } = render(
      <DownloadButton href="/test.pdf" download="test.pdf">
        Test
      </DownloadButton>
    );

    const wrapper = container.firstElementChild;
    expect(wrapper).not.toBeNull();
    expect(wrapper?.className).toBeTruthy();
  });
});