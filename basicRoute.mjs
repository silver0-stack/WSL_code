import express from 'express';//모듈 추출
const app=express(); //서버 생성

app.get('/page/:id',(req,res)=>{
    //토큰을 꺼낸다
    const id=req.params.id;

    //응답을 합니다
    res.send(`<h1> ${id} Page </h1>`); //send메소드를 가장 마지막에 사용해야 하며 두번 사용할 수 없음
});

//서버 실행
app.listen(52274,()=>{
    console.log('Sever running at http://127.0.0.1:52274');
});
