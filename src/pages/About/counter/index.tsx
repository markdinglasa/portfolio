import { useState, useEffect, useRef, useCallback } from "react";
import "./styles.css";
import { SFC } from "@/types";

interface ClientCounterProps {
  initialTarget?: number;
  duration?: number;
  title?: string;
  description?: string;
  label?: string;
}

const ClientCounter: SFC<ClientCounterProps> = ({
  initialTarget = 10,
  duration = 2000,

  label = "Satisfied Clients",
}) => {
  const [count, setCount] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);

  const animateCounter = useCallback(
    (targetValue: number, animationDuration: number = duration) => {
      if (isAnimating) return;

      //setIsAnimating(true);
      const start = 0;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        const currentValue = Math.floor(
          easeOutQuart * (targetValue - start) + start
        );
        setCount(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(updateCounter);
        } else {
          setIsAnimating(false);
          animationRef.current = null;
        }
      };

      animationRef.current = requestAnimationFrame(updateCounter);
    },
    [isAnimating, duration]
  );

  const renderAnimatedNumber = (num: number) => {
    const digits = num.toString().split("");
    return (
      <div className="animated-number overflow-visible">
        {digits.map((digit, index) => (
          <span key={index} className="digit-roll overflow-visible">
            <span className="text-primary digit overflow-visible">{digit}</span>
          </span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateCounter(initialTarget);
    }, 1000);

    return () => clearTimeout(timer);
  }, [animateCounter, initialTarget]);

  return (
    <div className="card">
      <div className="counter-container">
        <div className="counter-wrapper">
          <div
            className={`counter-digit overflow-visible ${isAnimating ? "animating" : ""}`}
          >
            {renderAnimatedNumber(count)}
          </div>
          <div className="counter-plus text-primary">+</div>
        </div>
        <div className="counter-label">{label}</div>
      </div>
    </div>
  );
};

export default ClientCounter;
