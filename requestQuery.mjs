import express from 'express'; //모듈 추출
const app=express(); //서버 생성

//req 이벤트 리스너를  설정
app.get('*',(req,res)=>{
    console.log(req.query); //요청매개변수를 추출할때는 query객체 사용
    res.send(req.query);
});

//서버 실행
app.listen(52279,()=>{
    console.log('Server running at http://127.0.0.1:52279');
});