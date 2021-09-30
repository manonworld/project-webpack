import React, { Component, Fragment } from 'react';
import { Container, Segment, Label, List, Header } from 'semantic-ui-react';
import calculateConfidence from './Progress';
import getVal from './HashMaps/ScoreTag';
import Sentence from './Sentence';

class Sentiments extends Component {

    render () {
        if (this.props.results) {

            let score_tag = this.props.results.response.score_tag;
            let confidence = this.props.results.response.confidence;
            let sntceLst = this.props.results.response.sentence_list;
            let concepts = this.props.results.response.sentimented_concept_list;

            return (
                <Container text>
                    <Segment raised>
                        <Label as='a' color='blue' ribbon='right'>
                            {getVal(score_tag)}
                        </Label>
                        <Label pointing='right'>Concepts</Label>
                        <List horizontal>
                            {concepts.map((concept) => (
                                 <List.Item key={concept.id}>
                                     <List.Content verticalAlign='top'>{concept.form}</List.Content>
                                 </List.Item>
                            ))}
                        </List>
                        <Header as="h4" color="blue">
                            Sentences List
                        </Header>
                        <List divided animated verticalAlign='middle'>
                            {sntceLst.map((sntnce) => (
                                <Sentence key={sntnce.text + "-sentence"} sntnce={sntnce} />
                            ))}
                        </List>
                        <Label pointing="below">Article Confidence Level</Label>
                        {calculateConfidence(confidence)}
                    </Segment>
                </Container>
            );
        }
        return (<div></div>);
    }

}

export default Sentiments;
