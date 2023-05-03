import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollAnimatedBlock = ({ children, animationClass }) => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (entry) {
      const animatedTargets = entry.target.querySelectorAll("[data-animated]");
      animatedTargets.forEach((animatedTarget) => {
        if (inView) {
          animatedTarget.classList.add(animationClass);
        } else {
          // animatedTarget.classList.remove(animationClass);
        }
      });
    }
  }, [animationClass, entry, inView]);

  return (
    <div className="scrollAnimatedBlock" ref={ref}>
      {children}
    </div>
  );
};

export default ScrollAnimatedBlock;
