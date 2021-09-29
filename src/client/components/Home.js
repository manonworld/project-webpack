import React from 'react';
import { TextArea, Button, Card, Image } from 'semantic-ui-react';
import Layout from './Layout';
import { textArea } from './Layout.css';

class Home extends React.Component {

  state = {
    loading: false,
    disabled: true,
    article: null
  };

  handleChange = (event) => {
    let article = event.target.value;
    if ( article !== null && article !== '' ) {
      this.setState(() => ({
        article,
        disabled: false
      }));
    } else {
      this.setState(() => ({
        disabled: true,
        loading: false
      }));
    }
  };

  handleSubmit = () => {
    this.setState({
      loading: true
    });
  };

  render () {
    return (
      <Layout>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Article</Card.Header>
              <Card.Description>
                <TextArea onChange={this.handleChange}
                  className={textArea} 
                  placeholder="Your Article"
                >
                </TextArea>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button onClick={this.handleSubmit} 
                  disabled={this.state.disabled} 
                  primary 
                  loading={this.state.loading}
                >
                  Evaulate
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </Layout>
    );
  }
}

export default Home;