import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.spacing['6']};

  h1 {
    font-size: ${props => props.theme.fontSize['6xl']};
  }
`;

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>404!</h1>
        <p>Not Found</p>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
