import express from 'express';
import fs from 'fs';
import path from 'path';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware'

const server = express();


import config from './config';

server.set('view engine','ejs');
server.set("views", path.join(__dirname,'views'));//COOL

server.get("/",(req,res) => {
    res.send("hello friend");
});

server.get("/ejs",(req,res)=>{
    res.render('index');//res.render('index',{content:'wow some content rendered right in my template! <hr> how neat!'});
});

/*
server.get("/about",(req,res) => {
    //res.send("about pg");
    //fs.readFile('/Users/alex/full_stack_js/code/about.html', (err,data) => {//works
    const about_path = path.join(__dirname,"public/about.html");
    fs.readFile(about_path, (err,data) => {

        res.send(data.toString());
        res.end();
    });

});
*/
//static middleware
const public_dir = path.join(__dirname,"public");
server.use(express.static(public_dir));

////add api ////////////////////////////

server.use("/api",apiRouter);

server.use(sassMiddleware({
    src: path.join(__dirname,"sass"),
    dest: path.join(__dirname,"public")
}));

server.listen(config.port, ()=>{
    console.info("Listening on port: ",config.port);
});
