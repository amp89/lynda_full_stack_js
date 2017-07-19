/*
import http from 'http'

http.get("http://www.alexmpeterson.com", res => {
    console.log(res.statusCode);
    res.on('data',chunk => {
        console.log(chunk.toString());
    });

} );
*/

import http from 'http';


/*
const server = http.createServer();

server.listen(8080);

server.on('request',(req,res) => {
        res.write('hello!!!\n\n');
        setTimeout(()=>{
            res.write('\n\ngooodbye!\n\n')
            res.end();
        },3000)

});
*/

const server = http.createServer((req,res) => {

    res.write("hi\n\n\n");
    setTimeout(()=>{
        res.write("byeeeee\n\n\n");
        res.end();
    },2000);

});

server.listen(8080);
