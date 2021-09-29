import React from 'react';
import Layout from './Layout';
import Form from './Form';

class Home extends React.Component {

  render () {
    return (
      <Layout>
        <Form />
      </Layout>
    );
  }
}

export default Home;