import express from "express";//모듈 추출
const app=express(); //서버 생성

app.get('*',(req,res)=>{
    res.status(404);
    res.send('해당 경로에는 아무것도 없습니다.');
});

//서버 실행
app.listen(52277,()=>{
    console.log('Server running at http://127.0.0.1:52277');
});