import React from 'react';
import { animated, useSpring } from 'react-spring';

type ScaleInWrapperProps = {
  className?: string
  children: React.ReactNode
};

function ScaleInWrapper({
  className = '',
  children,
}: ScaleInWrapperProps) {
  const style = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.95)' },
    config: { duration: 100 }
  });

  return (
    <animated.div className={className}
      style={style}>{children}</animated.div>
  );
};

export default React.memo(ScaleInWrapper);
