class MeaningCloudApi {
    
    query = ( req ) => {
        console.log(req);
        console.log(process.env.API_URL);
        console.log(process.env.API_KEY);
    };

    getClient = () => {
        const formdata = new FormData();
        formdata.append("key", "f4eecf90b11ba74675d21810769cc8d7");
        formdata.append("txt", "YOUR TEXT HERE");
        formdata.append("lang", "en");
    };

}

module.exports = MeaningCloudApi;