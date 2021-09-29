import React, { Component } from 'react';
import { Card, Button, TextArea, Dropdown } from 'semantic-ui-react';
import Langs from './Langs';
import { marginTopWidth } from './Layout.css';

class Form extends Component {

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
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Article</Card.Header>
                        <Card.Description>
                        <TextArea onChange={this.handleChange}
                            className={marginTopWidth} 
                            placeholder="Your Article"
                        >
                        </TextArea>
                        <br /><br />
                        <Dropdown
                            button
                            className='icon'
                            floating
                            labeled
                            icon='world'
                            options={Langs.getLangs()}
                            search
                            text='Select Language'
                        />
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
        );
    }

}

export default Form;
