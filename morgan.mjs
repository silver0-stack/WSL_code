import express from 'express';
import morgan from 'morgan';
const app=express();

app.use(express.static('image.png'));
app.use(morgan('combined'));

//request 이벤트 리스너 설정
app.get('*',(req,res)=>{
    res.send('명령 프롬프트를 확인해주세요.');
});

//서버실행
app.listen(52281,()=>{
    console.log('Server running at http://127.0.0.1:52281');
});