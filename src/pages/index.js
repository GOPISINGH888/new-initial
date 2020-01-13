import React from 'react';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Semster from '../components/Semster';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Semster />
      </Layout>
    );
  }
}
