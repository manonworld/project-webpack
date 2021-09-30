import React from 'react';
import Layout from './Layout';
import Form from './Form';
import { Grid } from 'semantic-ui-react';
import Sentiments from './Sentiments';

class Home extends React.Component {

  state = {
    results: null
  };

  update = ( results ) => {
    this.setState(() => ({
      results
    }));
  };

  render () {
    return (
      <Layout>
        <Grid columns={2}>
          <Grid.Column width={5}>
            <Form update={this.update} />
          </Grid.Column>
          <Grid.Column width={10}>
            <Sentiments results={this.state.results} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Home;