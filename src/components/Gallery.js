import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: ${props => props.theme.spacing['10']};

  margin: ${props => props.theme.spacing['10']} 0;
`;

const Item = styled.div`
  margin: 0;

  img,
  source,
  picture {
    margin: 0;
  }
`;

const Gallery = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <Grid>
      {images.map(image => (
        <Item key={image.id}>
          <Img fluid={image.childImageSharp.fluid} style={{ display: 'block', width: '100%' }} />
        </Item>
      ))}
    </Grid>
  );
};

export default Gallery;
