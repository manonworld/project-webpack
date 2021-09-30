import React, { Component } from 'react';
import { Container, Segment, Label, Progress, List, Header } from 'semantic-ui-react';
import getVal from './HashMaps/ScoreTag';

class Sentiments extends Component {

    render () {
        if (this.props.results) {

            let score_tag = this.props.results.response.score_tag;
            let confidence = this.props.results.response.confidence;
            let sntceLst = this.props.results.response.sentence_list;

            return (
                <Container text>
                    <Segment raised>
                        <Label as='a' color='blue' ribbon='right'>
                            {getVal(score_tag)}
                        </Label>
                        <Header as="h4" color="blue">
                            Sentences List
                        </Header>
                        <List divided animated verticalAlign='middle'>
                            {sntceLst.map((sntnce) => (
                                <List.Item>
                                    <List.Icon name='marker' />
                                    <List.Content>
                                        <List.Description>{sntnce.text}</List.Description>
                                    </List.Content>
                                </List.Item>
                            ))}
                        </List>
                        <Label pointing="below">Confidence Level</Label>
                        <Progress percent={this.props.results.response.confidence} 
                            success={confidence >= 70 ? true : false}
                            warning={confidence >= 30 && confidence < 70 ? true : false}
                            error={confidence >= 0 && confidence < 30 ? true : false}
                        >
                            {this.props.results.response.confidence}%
                        </Progress>
                    </Segment>
                </Container>
            );
        }
        return (<div></div>);
    }

}

export default Sentiments;
