import express from 'express';// 모듈 추출
const app=express();//서버 생성

//req 이벤트 리스너를 설정합니다
app.get('*',(req,res)=>{
    res.status(404); //상태코드 제공
    res.set('methodA','ABCDE');
    res.set({
        'methodB1':'FGHIJ',
        'methodB2':'KLMNO'
    });
    res.send('내 마음대로 본문을 입력합니다.')//맨 마지멕에, 한번만 send 입력
});

//서버를 실행합니다
app.listen(52275,()=>{
    console.log('Server running at http://127.0.0.1:52275');
});