import React from 'react';
import Layout from '../components/Layout';
import useProjects from '../hooks/useProjects';

export default () => {
  const projects = useProjects();

  return (
    <Layout>
      <div>Hello world!</div>
      {projects.map(project => (
        <pre>{JSON.stringify(project, null, 2)}</pre>
      ))}
    </Layout>
  );
};
