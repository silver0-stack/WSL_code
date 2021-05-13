import express from 'express'; //모듈 추출
const app=express(); //서버생성

app.use(express.static('public.zip')); // use()로 static 미들웨어 사용

app.get('*',(req,res)=>{
    res.send(404); //상태코드
    res.send('해당경로에는 아무것도 없습니다');
});

//서버실행
app.listen(52280,()=>{
    console.log('Server running at http://127.0.0.1:52280');
});