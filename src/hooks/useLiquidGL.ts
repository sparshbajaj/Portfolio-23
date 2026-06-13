import { useEffect, useRef } from 'react';

interface LiquidGLOptions {
  target: string;
  snapshot?: string;
  resolution?: number;
  refraction?: number;
  bevelDepth?: number;
  bevelWidth?: number;
  frost?: number;
  specular?: boolean;
  shadow?: boolean;
  reveal?: 'fade' | 'none';
  tilt?: boolean;
  tiltFactor?: number;
  magnify?: number;
  on?: {
    init?: (intro: { el: HTMLElement }) => void;
  };
}

declare global {
  interface Window {
    liquidGL: (options: LiquidGLOptions) => any;
  }
}

export const useLiquidGL = (options: LiquidGLOptions, deps: React.DependencyList = []) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || typeof window === 'undefined') return;

    // Wait for liquidGL to be available
    const initLiquidGL = () => {
      if (window.liquidGL) {
        try {
          window.liquidGL(options);
          initialized.current = true;
        } catch (error) {
          console.warn('liquidGL initialization failed:', error);
        }
      } else {
        // Retry after a short delay
        setTimeout(initLiquidGL, 100);
      }
    };

    // Start initialization after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(initLiquidGL, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useLiquidGL;