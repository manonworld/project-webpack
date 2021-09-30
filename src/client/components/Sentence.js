import React from 'react';
import { Popup, List, Label, Header } from 'semantic-ui-react';
import calculateConfidence from './Progress';
import getVal from './HashMaps/ScoreTag';

const Sentence = ( props ) => {
    return (
        <Popup key={props.sntnce.text + "-sentence"} trigger={
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>
                        <List.Description>{props.sntnce.text}</List.Description>
                    </List.Content>
                </List.Item>
            } flowing hoverable
        >
            <Label as='a' color='blue' ribbon='right'>
                {getVal(props.sntnce.score_tag)}
            </Label>
            <Header as="h6" color="blue">
                Segments List
            </Header>
            <List>
                {props.sntnce.segment_list.map((segment) => (
                    <List.Item key={segment.text + "-segment"}>
                        <List.Icon name='marker' />
                        <List.Content>
                            {segment.text}
                        </List.Content>
                    </List.Item>
                ))}
            </List>
            <Label pointing="below">Sentence Confidence Level</Label>
            {calculateConfidence(props.sntnce.confidence)}
        </Popup>
    );
}

export default Sentence;
