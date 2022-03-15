import React from "react";
import styled from "styled-components";

const FadeUpStyled = styled.div`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;

  &.fade-in-section-is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

export const FadeUp: React.FC = (props): JSX.Element => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!domRef) {
      return;
    }
    const current = domRef.current as Element;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <FadeUpStyled
      className={`${isVisible ? 'fade-in-section-is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </FadeUpStyled>
  );
}
