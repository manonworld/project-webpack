const map = {
    "P+": "strong positive",
    "P": "positive",
    "NEU": "neutral",
    "N": "negative",
    "N+": "strong negative",
    "NONE": "without polarity"
};

let getVal = ( key ) => map[ key ];

export default getVal;
