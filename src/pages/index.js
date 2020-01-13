import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Semcard from '../components/Semcard';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  h1 {
    color: ${props => props.theme.mainBrandColor} !important;
    margin-top: -4rem;
  }
  p {
    margin-bottom: 1rem;
  }
  img {
    height: 30rem;
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section className="section">
          <Container className="container">
            <h1 className="title ">Effortless Engneering</h1>
            <p className="has-text-weight-semibold is-size-4">
              HI. We are there to help you to easily clear your exams.
            </p>
            <p className="has-text-weight-normal">
              Only for Computer science Engneering
            </p>
          </Container>
        </section>
      </Layout>
     <Semcard />
    );
  }
}
