import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Subjects from '../components/SubjectCard';

export default class Subject extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Subjects />
      </Layout>
    );
  }
}
