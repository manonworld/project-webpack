const https = require('https');

class MeaningCloudApi {
    
    query = ( text, lang ) => {
        return new Promise(function(resolve, reject) {
            let data = MeaningCloudApi.getData( text, lang );
            var req = https.request(MeaningCloudApi.getOpts(data.length), function(res) {
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(new Error('statusCode=' + res.statusCode));
                }
                var body = [];
                res.on('data', function(chunk) {
                    body.push(chunk);
                });
                res.on('end', function() {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    } catch(e) {
                        reject(e);
                    }
                    resolve(body);
                });
            });
            req.on('error', function(err) {
                reject(err);
            });
            req.write(data);
            req.end();
        });
    };

    static getData = ( text, lang ) => (
        new TextEncoder()
            .encode(JSON.stringify({
                key: process.env.API_KEY,
                txt: text,
                lang: lang,
            }))
    );

    static getOpts = ( len ) => ({
        hostname: process.env.API_HOST,
        port: process.env.API_PORT,
        path: process.env.API_PATH,
        method: process.env.API_METHOD,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': len
        }
    });

}

module.exports = MeaningCloudApi;