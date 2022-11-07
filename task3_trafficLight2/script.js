/*
В данном коде переключение цвета происходит мгновенно, я прочитала в интеренете, что есть функция отсрочки вызова, 
но как ее применить - я не могу сообразить
*/ 

const trafficLightEl = document.querySelector('#green');
const trafficLightE2 = document.querySelector('#yellow');
const trafficLightE3 = document.querySelector('#red');


function makeGreen() {
    trafficLightE3.style.background = 'black';
    trafficLightEl.style.background = 'green'; 
    trafficLightEl.removeEventListener('click', makeGreen); 
   // setInterval(() => {makeGreen;}, 3000);
    trafficLightE2.addEventListener('click', makeYellow());
}


function makeYellow(){
    trafficLightEl.style.background = 'black';
    trafficLightE2.style.background = 'yellow';  
    trafficLightE2.removeEventListener('click',makeYellow);
    //setInterval(() => {makeYellow;}, 3000);
    trafficLightE3.addEventListener('click', makeRed());
}


function makeRed(){
    trafficLightE2.style.background = 'black';
    trafficLightE3.style.background = 'red';
    //setInterval(() => {makeRed;},3000);
    trafficLightE3.removeEventListener('click',makeRed);
}

document.addEventListener('click', (event)=>{
    if(event.target.id == 'green'){     
        makeGreen();
    }else if(event.target.id == 'yellow'){   
        makeYellow();
    }else if(event.target.id == 'red'){   
        makeRed();
    }; 
});  

