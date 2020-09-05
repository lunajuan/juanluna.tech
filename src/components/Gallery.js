import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Img from './image';

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing['10']};
  grid-template-columns: 1fr;
  margin: ${props => props.theme.spacing['10']} 0;

  @media (min-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.screen.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled.div`
  margin: 0;
`;

const Gallery = ({ items = [] }) => {
  const theme = useContext(ThemeContext);

  if (!items.length) return null;

  return (
    <Grid>
      {items.map((item, index) => (
        <Item key={index}>
          <Img
            rounded
            fluid={{
              ...item.imageFileName.childImageSharp.fluid,
              sizes: `(min-width: ${theme.pageMaxWidth.outer}) 770px, (min-width: ${theme.screen.xl}) 33vw, (min-width: ${theme.screen.sm}) 50vw, 100vw`,
            }}
            style={{ display: 'block', width: '100%' }}
            alt={item.imageAlt || null}
          />
        </Item>
      ))}
    </Grid>
  );
};

export default Gallery;
