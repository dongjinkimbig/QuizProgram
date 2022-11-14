
let capital = {1:'홍콩의 수도는?', 2:'중국의 수도는?', 3:'인도의 수도는?', 4:'라오스의 수도는?', 5:'이스라엘의 수도는?', 6:'필리핀의 수도는?', 7:'인도네시아의 수도는?', 8:'요르단의 수도는?', 9:'오스트리아의 수도는?', 10:'러시아의 수도는?', 11:'이탈리아의 수도는?',12:'싱가포르의 수도는?',13:'루마니아의 수도는?',14:'그리스의 수도는?',15:'이란의 수도는?', 16:'헝가리의 수도는?', 17:'핀란드의 수도는?', 18:'일본의 수도는?', 19:'대한민국의 수도는?', 20:'태국의 수도는?'};

let capital_cap = {1:'빅토리아', 2:'베이징', 3:'뉴델리', 4:'비엔티안', 5:'예루살렘',6:'마닐라',7:'자카르타',8:'암만',9:'비엔나',10:'모스크바',11:'로마',12:'싱가포르',13:'부쿠레슈티',14:'아테네',15:'테헤란',16:'부다페스트',17:'헬싱키',18:'도쿄',19:'서울', 20:'방콕'};

function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}

function Quiz(){
    isFalse=0;
    isTrue=0;
    let rnarr = [];
for (i=0; i<3; i++) {
  randomNum = Math.round(Math.random() * 20);
if (rnarr.indexOf(randomNum) === -1) {
    rnarr.push(randomNum)
    }
}
    rnarr[0];
        const ans = prompt(capital[rnarr[0]]);
        if(ans == capital_cap[rnarr[0]]){
            alert('맞았읍니다. 다음문제');
            isTrue++;
            
        }
        else{
            fail();
        }
    
    rnarr[1];
    sleep(3000);
    const ans2 = prompt(capital[rnarr[1]]); 
        if(ans2 == capital_cap[rnarr[1]]){
            alert('맞았읍니다. 다음문제');
            isTrue++;
            
            }
        else{
            fail();
        }
        rnarr[2];
        sleep(3000);
    const ans3 = prompt(capital[rnarr[2]]);
        if(ans3 == capital_cap[rnarr[2]]){
            alert('맞았습니다! 시험종료');
            isTrue++;
        }
        else{
            fail();
        }
        alert(`맞은 개수 : ${isTrue}, 틀린 개수 : ${isFalse}`);
        if(isFalse==3){
            alert('전부 틀리셨으므로 재시험입니다.');
            Quiz();
        }else{
            alert('수고하셨습니다.')
        }
    }
function fail(){
        alert('틀렸습니다! ');
        isFalse++;
    }
    Quiz();



