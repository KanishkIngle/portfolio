import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  .typewriter {
    display: inline-flex;
    align-items: center;
  }

  .cursor {
    margin-left: 2px;
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const useTypewriter = (ref, words, start, options = {}) => {
  const {
    typingSpeed = 120,
    deletingSpeed = 80,
    pauseAfterType = 2000,
    pauseAfterDelete = 200,
  } = options;

  useEffect(() => {
    if (!start || !ref.current) {return;}

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        ref.current.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, pauseAfterType);
          return;
        }
      } else {
        ref.current.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;

          timeoutId = setTimeout(() => {
            tick();
          }, pauseAfterDelete);
          return;
        }
      }

      timeoutId = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, [start]);
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const typewriterRef = React.useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useTypewriter(
    typewriterRef,
    ['web', 'concurrency', 'scale', 'performance', 'security', 'robustness'],
    isMounted,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Kanishk Ingle.</h2>;
  const three = (
    <h3 className="big-heading">
      I build things for the{' '}
      <span className="typewriter">
        <span ref={typewriterRef}></span>
        <span className="cursor">|</span>
      </span>
    </h3>
  );
  const four = (
    <>
      <p>
        Hey! I’m Kanishk - from Sangli, Maharashtra — a place where curiosity and ambition quietly
        grow alongside simplicity.
      </p>
      <p>
        My interest in engineering started early, sparked by a simple curiosity about how things
        work. That curiosity turned serious the first time I got access to a computer. What began as
        exploration quickly became fascination — writing code, breaking things, fixing them, and
        realizing how software can quietly power the world around us.
      </p>
      <p>
        Driven by this curiosity, I pursued Computer Science and earned my Master’s degree from the
        prestigious{' '}
        <a href="https://www.nitgoa.ac.in/" target="_blank" rel="noreferrer">
          National Institute of Technology, Goa
        </a>{' '}
        (2020–22). Since then, I’ve been focused on building reliable backend systems, working close
        to cloud infrastructure, and solving problems that demand scalability, performance, and
        thoughtful engineering.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
