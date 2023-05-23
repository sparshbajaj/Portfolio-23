declare module 'react-animated-cursor' {
    const ReactAnimatedCursor: React.ComponentType<{
      innerSize?: number;
      outerSize?: number;
      color?: string;
      outerAlpha?: number;
      innerScale?: number;
      outerScale?: number;
      zIndex?: number;
      easing?: string;
      duration?: number;
      delay?: number;
    }>;
    export default ReactAnimatedCursor;
  }