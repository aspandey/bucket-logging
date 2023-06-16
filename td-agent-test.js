const dgram = require('dgram');

const client = dgram.createSocket('udp4');

let totalMessages = 10;
let messagesSent = 0;

for (let i = 0; i < totalMessages; i++) {
    let message = '<34>' + "NOOBAA" + i + ' 79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be DOC-EXAMPLE-BUCKET1 [06/Feb/2019:00:00:38 +0000] 192.0.2.3 79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be 3E57427F3EXAMPLE REST.GET.VERSIONING - "GET /DOC-EXAMPLE-BUCKET1?versioning HTTP/1.1" 200 - 113 - 7 - "-" "S3Console/0.4" - s9lzHYrFp76ZVxRcpX9+5cjAnEH2ROuNkd2BHfIa6UkFVdtjf5mKR3/eTPFvsiP/XV/VLi31234= SigV4 ECDHE-RSA-AES128-GCM-SHA256 AuthHeader DOC-EXAMPLE-BUCKET1.s3.us-west-1.amazonaws.com TLSV1.2 arn:aws:s3:us-west-1:123456789012:accesspoint/example-AP Yes\n';
    // const message = "<34>BOM su root failed for lonvick on /dev/pts/8";
    // let message = '<1>1 2023-06-16T10:15:30.123456Z my-hostname my-app 12345 - - Example log message'

    client.send(message, 5140, '127.0.0.1', (err) => {
        if (err) throw err;
        console.log('Log message sent successfully');
        messagesSent++;

        if (messagesSent === totalMessages) {
            client.close();
        }

    });
}