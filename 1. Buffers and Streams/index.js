const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    
    // 1st method, without streams
    // fs.readFile('input.txt', (err, data) => {
    //     if(err)     return res.end("ERROR", err);
    //     return res.end(data);
    // })

    // 2nd method, with streams
    // Create readable stream, handle stream events
    const rStream = fs.createReadStream('input.txt');

    rStream.on('data', (chunk) => {
        console.log(chunk);
        res.write(chunk);
    })

    rStream.on("end", () => {
        res.end();
    });

    rStream.on("error", (error) => {
        res.end("ERROR!!", error);
    })

})

server.listen(8000, "127.0.0.1");