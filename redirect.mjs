import express from "express"; //모듈 추출
const app=express(); //서버 생성

//request 이벤트 리스너를 설정
app.get("*",(req,res)=>{
    res.redirect('http://hanbit.co.kr'); //특정경로로 웹 브라우저를 인도redirect
});

//서버 실행
app.listen(52278,()=>{
    console.log('Server running at http://127.0.0.1:52278');
});