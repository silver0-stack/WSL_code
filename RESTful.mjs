import express from 'express';
import bodyParser from './bodyParser';

const app=express();//서버 생성
app.listen(54000,()=>{ //서버 실행.
    console.log('Server running at http://127.0.0.4:54000');
});

app.use(bodyParser,urlencoded({ extended:false})); //미들웨어 추가

let userCounter=0; //id 속성을 생성하는 변수
const users=[]; //id 배열을 생성하는 변수

app.get('/user',(req,res)=>{
    res.send(users); //모든 사용자 정보를 조회
})

app.post('/user',(req,res)=>{
    const body=req.body; //변수 선언

    if(!body.name) return res.status(400).send('name을 보내주세요');
    else if(!body.region) return res.status(400).send('region을 보내주세요');

    const name=body.name; //변수 추출
    const region=body.region; //변수 추출

    const data={ //데이터 저장
        id:userCounter++,
        name:name,
        region:region
    };
    users.push(data); //사용자 추가
    res.send(data); //응답
});

app.get('/user/:id',(req,res)=>{
    const id=req.params.id; //변수 선언

    const filtered=users.filter((user)=>user.id==id); //특정 사용자 정보 조회

    if(filtered.length==1) res.send(filtered[0]);
    else res.status(404).send('데이터가 존재하지 않습니다.');
});

app.put('/user/:id',(req,res)=>{
    const id=req.params.id;
    let isExist=false;

    //데이터 수정
    users.forEach((user)=>{
        if(user.id==id){ //데이터가 존재한다면
            //수정
            isExist=true;
            if(req.body.name) users[id].name=req.body.name;
            if(req.body.region) users[id].region=req.body.region;

            res.send(user); //응답
        }
    });

    if(!isExist) //데이터가 존재하지 않는다면
    res.status(404).send('데이터가 존재하지 않습니다.'); //응답
});

app.delete('/user/:id',(req,res)=>{
    //변수 선언
    const id=req.params.id;
    let deletedUser=null;

    //데이터 제거
    for(let i=users.length-1;i>=0;i--){
        //id가 일치하면
        if(users[i].id==id){
            //저장+제거
            deletedUser=users[i];
            users.splice(i,1); //특정 사용자 정보 제거
            break; //더 반복할 필요 없으니 벗어나기
        }
    }
    if(deletedUser) res.send(deletedUser); //응답
    else res.status(404).send('데이터가 존재하지 않습니다.'); 
});