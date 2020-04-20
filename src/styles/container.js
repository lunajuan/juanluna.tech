/* eslint-disable prettier/prettier */
import React from 'react';
import styled, { css } from 'styled-components';

export const containerStyle = css`
  margin: 0;
  padding: ${props => (props.noVerticalPadding ? 0 : props.theme.spacing['10'])} ${props => (props.noHorizontalPadding ? 0 : props.theme.pageGutter)};

  @media (min-width: ${props => props.theme.screen.lg}) {
    padding-top: ${props => (props.noVerticalPadding ? 0 : props.theme.spacing['16'])};
    padding-bottom: ${props => (props.noVerticalPadding ? 0 : props.theme.spacing['16'])};
  }
`;

const Wrapper = styled.div`
  ${containerStyle};
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
