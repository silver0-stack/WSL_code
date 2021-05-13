/*가지고 있는 데이터를 내가 원하는 형태의 데이터로 가공하는 과정을 parsing이라고 하며
그 과정을 수행하는 모듈 혹은 메소드를 parser라고 함

단순히 말하자면 내가 모르는 언어를 내가 원하는 언어의 구조로 바꿔주는 일종의 구문 해석기라고도 할 수 있겠다
parser는 구문 해석을 할뿐 번역을 하지 않음 번역의 역할은 compiler가 함

bodyParser 없이 req.body에 접근하는 경우 undefined 출력됨
 API 요청에서 받은 body 값을 파싱하는 역할을 수행하는 것이 bodyParser 라는 미들웨어이다.
 */ 
import express from 'express';
import morgan from 'morgan';

const app=express(); //서버생성
//미들웨어 설정
app.use(express.static('image.png'));
app.use(morgan('combined'));
// 클라이언트에서 오는 응답이 json형태 or 
// json이 아닌 그냥 post(urlencoding된) 데이터를 파싱
app.use(express.json());
app.use(express.urlencoded({extended:false})); //이 옵션이 false면 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하고,

//request 이벤트 리스너 설정
app.get('/',(req,res)=>{
    //HTML 형식의 문자열을 생성
    let output='';
    output+='<form method="post">';
    output+='   <input type="text" name="a" />';
    output+='   <input type="text" name="b" />';
    output+='   <input type="submit" />';
    output+='</form>';

    //응답
    res.send(output);
});

app.post('/',(req,res)=>{
    //응답
    res.send(req.body); //bodyParser 사용하면 내부적으로 본문을 해석해 req.body에 추가
});

//서버실행
app.listen(52285,()=>{
    console.log('Server running at http://127.0.0.1:52285');
});