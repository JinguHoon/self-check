const secondgradetime = [
    ["", "2학년 4반"],
    ["", "2학년 5반"],
    ["", "2학년 6반"],
    ["", "2학년 1반"],
    ["", "2학년 2반"],
    ["", "2학년 3반"],
    ["", "2학년 4반"],
    ["", "2학년 5반"],
    ["", "2학년 6반"],
    ["", "2학년 1반"],
    ["", "2학년 2반"],
    ["", "2학년 3반"],
];
const lunchdinnertime = [

]
setClock();

function find()
{
    let low = 0;
    let high = secondgradetime.length-1;
    let mid = Math.round((high+low)/2);
    let target = new Date().getTime();
    while(target > Date.parse(secondgradetime[mid][0]) || target < Date.parse(secondgradetime[mid][0])) {
        if(mid==secondgradetime.length-1||mid==0) break;
        if(target < Date.parse(secondgradetime[mid][0])) {
            high = mid-1;
            mid = Math.floor((high+low)/2);
        }
        else {
            low=mid+1;
            mid = Math.floor((high+low)/2);
        }
    }
    console.log(mid);
    return mid;
}

function time(idx){ // 남은 시간 계산함수\
    let now = new Date().getTime();
    let enDate = Date.parse(secondgradetime[idx][0]);
    let minustodate = enDate - now;
    let daysecond = 86400000;
    
    let day = Math.floor(minustodate / (60*1000*60*24));
    let hour = Math.floor((minustodate % (daysecond))/(1000*60*60));
    let minute = Math.floor((minustodate % (1000 * 60 * 60)) / (1000 * 60));
    //let second = Math.floor((minustodate % (1000 * 60)) / 1000);
    
    console.log(new Date(), secondgradetime[idx][0], minustodate,day);
    if(day==0){
        if(hour==0) {
            if(minute==0) {
                return false;
                // if(second==0){
                //     return false;
                // }
                // document.getElementById('wait-time').innerHTML = second + "초 남았습니다.";
                // document.getElementById('wait-class').innerHTML = secondgradetime[idx][1];
                // return true;
            }
            document.getElementById('wait-time').innerHTML = minute + "분 남았습니다.";
            document.getElementById('wait-class').innerHTML = secondgradetime[idx][1];
            return true;
        }
        document.getElementById('wait-time').innerHTML = hour + "시간 " + minute + "분 남았습니다.";
        document.getElementById('wait-class').innerHTML = secondgradetime[idx][1];
        return true; 
    }
    document.getElementById('wait-time').innerHTML = day + "일 " + hour + "시간 " + minute  + "분 남았습니다.";
    document.getElementById('wait-class').innerHTML = secondgradetime[idx][1];
    return true;
}

function setArray() //매번 동적으로 시간 설정
{
    let now = new Date();
    let pushtime = new Date(now.getFullYear(), now.getMonth(), now.getDate(),12,45,00); //점심시간표
    for(let k=0;k<(secondgradetime.length)/2;k++) {
        secondgradetime[k][0] = pushtime.toString();
        console.log(secondgradetime[k][0]);
        pushtime.setMinutes(pushtime.getMinutes()+3);
    }
    pushtime = new Date(now.getFullYear(), now.getMonth(), now.getDate(),18,45,00); //저녁시간표
    for(let k=(secondgradetime.length)/2; k<secondgradetime.length;k++) {
        secondgradetime[k][0] = pushtime.toString();
        console.log(secondgradetime[k][0]);
        pushtime.setMinutes(pushtime.getMinutes()+3);
    }
}
function setClock() //시작 함수
{
    setArray();
    let i = find();
    setInterval(function(){
        if(i==secondgradetime.length-1) {
            console.log('hi');
            document.getElementById('wait-time').innerHTML = "식사시간 끝!";
            for(var k=0;k<secondgradetime.length;k++) {
                let d = new Date(secondgradetime[k][0]);
                d.setDate(d.getDate() + 1);
                secondgradetime[k][0] = d.toString();
                console.log(secondgradetime[k][0]);
            }
            i=0;
        }
        if(!time(i)) i++;
        console.log(i);
    },1000);
}