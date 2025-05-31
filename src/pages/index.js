import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  position: relative;
  counter-reset: section;
  overflow: hidden;

  section,
  div {
    position: relative;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    top: var(--mouse-y, 0);
    left: var(--mouse-x, 0);
    opacity: var(--glow-opacity, 0);
    transition: top 0.05s ease, left 0.05s ease, opacity 0.3s ease;
    filter: blur(100px);
    mix-blend-mode: lighten;
    z-index: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const IndexPage = ({ location }) => {
  useEffect(() => {
    let timeout;
    const root = document.documentElement;

    const updateMousePosition = e => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      root.style.setProperty('--mouse-x', `${x}px`);
      root.style.setProperty('--mouse-y', `${y}px`);
      root.style.setProperty('--glow-opacity', '1');

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        root.style.setProperty('--glow-opacity', '0');
      }, 2000); // fade out if idle for 2 seconds
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
