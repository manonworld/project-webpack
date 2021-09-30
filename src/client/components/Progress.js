import React from 'react';
import { Progress } from 'semantic-ui-react';

const calculateConfidence = ( confidence ) => (
    <Progress color='blue' percent={confidence} 
        // success={confidence >= 70 ? true : false}
        // warning={confidence >= 30 && confidence < 70 ? true : false}
        // error={confidence >= 0 && confidence < 30 ? true : false}
    >
        {confidence}%
    </Progress>
);

export default calculateConfidence;
