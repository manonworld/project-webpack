import React, { Component } from 'react';
import { Card, Button, TextArea, Dropdown, Label } from 'semantic-ui-react';
import Langs from './Langs';
import { marginTopWidth } from './Layout.css';

class Form extends Component {

    state = {
        loading: false,
        disabled: true,
        article: null,
        lang: null
    };
  
    #handleTextChange = ( event ) => {
        this.#validateInput();
        let article = event.target.value;
        this.setState(() => ({
            article: article !== null 
                && article !== '' 
                ? article 
                : null
        }), () => this.#validateInput());
    };
  
    #handleSubmit = () => {
        this.setState({
            loading: true
        });
        this.#sendRequest();
    };

    #handleDropChange = ( event, data ) => {
        let lang = data.value;
        this.setState(() => ({
            lang,
        }), () => this.#validateInput());
    };

    #validateInput = () => {
        let articleRegex = new RegExp('^[a-zA-Z .,]{4,2555}$');
        let langRegex = new RegExp('^[a-z]{2}$');
        let articleVal = this.state.article;
        let langVal = this.state.lang;

        let res = !articleRegex.test(articleVal) || !langRegex.test(langVal);

        this.setState(() => ({
            disabled: res
        }));

        return !res;
    }

    #sendRequest = () => {
        if ( this.#validateInput() ) {        
            let url = this.#prepareUrl();
            fetch(url).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong when calling the API');
                }
            })
            .then((responseJson) => {
                this.setState(() => ({
                    loading: false
                }));
                this.props.update(responseJson);
            })
            .catch((error) => {
                throw new Error(error);
            });
        }
    };

    #prepareUrl = () => {
        let lang = this.state.lang;
        let article = this.state.article;
        let backUrl = '/query?text=';
        return backUrl + article + "&lang=" + lang;
    };

    render () {
        return (
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Article</Card.Header>
                        <Card.Description>
                        <TextArea onChange={this.#handleTextChange}
                            className={marginTopWidth} 
                            placeholder="Your Article"
                        >
                        </TextArea>
                        <br /><br />
                        <Dropdown
                            onChange={this.#handleDropChange}
                            button
                            className={'icon ' + marginTopWidth}
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
                        <Button onClick={this.#handleSubmit} 
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
