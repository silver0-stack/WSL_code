import express from 'express';
import fs from 'fs';

const app=express(); //서버실행

app.get('/image',(req,res)=>{
    fs.readFile('image.png',(err,data)=>{
        //이미지 파일 제공
        res.type('image/png');//컨텐트타입 제공
        res.send(data);
    });
});

app.get('/audio',(req,res)=>{
    fs.readFile('audio.mp3',(err,data)=>{
        //음악파일을 제공한다
        res.type('audio/mpeg');//컨텐트 타입 제공
        res.send(data);
    });
});

//서버 실행
app.listen(52276,()=>{
    console.log('Server running at http://0.0.1:52276');
});