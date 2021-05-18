import express from 'express';
import http from 'http';

let app=express(); //서버 실행
let server=http.createServer(app).listen(80);

app.get('./',(req,res)=>{
    res.sendFile('./login.html');
});

console.log('Server is running...');