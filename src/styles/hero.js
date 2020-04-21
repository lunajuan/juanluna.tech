import styled, { css } from 'styled-components';
import { containerStyle } from './container';

const gridLayout = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.spacing['4']};

  @media (min-width: ${props => props.theme.screen.md}) {
    grid-gap: ${props => props.theme.spacing['6']};
  }

  @media (min-width: ${props => props.breakpoint}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.spacing['12']};
    align-items: center;
  }
`;

const Hero = styled.section`
  ${containerStyle};
  ${props => (props.halfSplitLayout ? gridLayout : '')};

  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${props => props.breakpoint}) {
      ${props => (props.halfSplitLayout ? 'display: block' : '')}
    }
  }

  p {
    max-width: 35em;
  }

  h1 {
    margin: ${props => props.theme.spacing['6']} 0;
    font-size: ${props => props.theme.fontSize['5xl']};

    @media (min-width: ${props => props.breakpoint}) {
      font-size: ${props => props.theme.fontSize['6xl']};
    }
  }
`;

export default Hero;
