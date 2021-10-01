import React from 'react';
import { Progress } from 'semantic-ui-react';

const CalculateConfidence = ( props ) => (
    <Progress color='blue' percent={props.confidence} >
        {props.confidence}%
    </Progress>
);

export default CalculateConfidence;
