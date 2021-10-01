import React from 'react';
import { Popup, List, Label, Header } from 'semantic-ui-react';
import CalculateConfidence from './Progress';
import getVal from './HashMaps/ScoreTag';

const Sentence = ( props ) => {
    if ( props.sntnce ) {
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
                <CalculateConfidence confidence={props.sntnce.confidence} />
            </Popup>
        );
    } else {
        return (<div></div>);
    }
}

export default Sentence;
