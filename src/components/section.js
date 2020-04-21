import styled, { css } from 'styled-components';
import { containerStyle } from '../styles/container';

const strippedStyles = css`
  &:nth-child(odd) {
    background-color: ${props => props.theme.background.light};
  }
`;

const roundedStyles = css`
  @media (min-width: ${props => props.theme.screen.lg}) {
    border-radius: ${props => props.theme.borderRadius.default};
    margin: 0 ${props => props.theme.pageGutter};
  }
`;

const Section = styled.section`
  ${containerStyle};
  ${props => (props.rounded ? roundedStyles : '')};
  ${props => (props.stripped ? strippedStyles : '')};
`;

export default Section;
