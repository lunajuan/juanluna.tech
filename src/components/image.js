import styled from 'styled-components';
import Img from 'gatsby-image';

const GatsbyImage = styled(Img)`
  width: 100%;
  border-radius: ${props => {
    if (props.rounded) return props.theme.borderRadius.default;
    if (props.circle) return props.theme.borderRadius.full;
    return 0;
  }};
  box-shadow: ${props => {
    if (props.shadow) return props.theme.boxShadow.default;
    return 'none';
  }};
  ${props => (props.noMargin ? 'margin: 0' : '')};

  img {
    margin: 0;
  }
`;

export default GatsbyImage;
