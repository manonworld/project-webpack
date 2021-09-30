import React from 'react';
import { Progress } from 'semantic-ui-react';

const calculateConfidence = ( confidence ) => (
    <Progress color='blue' percent={confidence} >
        {confidence}%
    </Progress>
);

export default calculateConfidence;
