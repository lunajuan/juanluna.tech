import styled, { css } from 'styled-components';
import { containerStyle } from './container';

const gridLayout = css`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => props.theme.spacing['4']};

  @media (min-width: ${props => props.theme.screen.md}) {
    grid-gap: ${props => props.theme.spacing['6']};
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${props => props.theme.spacing['12']};
    align-items: center;
  }
`;

const Hero = styled.section`
  ${containerStyle};
  ${props => (props.halfSplitLayout ? gridLayout : '')};

  p {
    max-width: 35em;
  }

  h1 {
    text-align: center;
    margin: ${props => props.theme.spacing['6']} 0;
    font-size: ${props => props.theme.fontSize['5xl']};

    @media (min-width: ${props => props.theme.screen.md}) {
      text-align: left;
      font-size: ${props => props.theme.fontSize['6xl']};
    }
  }
`;

export default Hero;
