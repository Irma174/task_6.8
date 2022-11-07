/*const trafficLightEl =document.querySelectorAll('.trafficLight');

function makeGreen() {
    trafficLightEl.style.background = 'green';
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow(){
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed(){
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.forEach(() => addEventListener('click', makeGreen));*/


const trafficLightEl = document.querySelector('#green');
const trafficLightE2 = document.querySelector('#yellow');
const trafficLightE3 = document.querySelector('#red');


function makeGreen() {
    setTimeout(trafficLightEl.style.background = 'green', 3000); 
    trafficLightEl.removeEventListener('click', makeGreen); 
    trafficLightEl.style.background = 'black';
    trafficLightE2.addEventListener('click', (makeYellow()));
}

function makeYellow(){
    setTimeout(trafficLightE2.style.background = 'yellow', 3000);  
    trafficLightE2.removeEventListener('click',makeYellow, 3000);
    trafficLightE2.style.background = 'black';
    trafficLightE3.addEventListener('click', makeRed());
}

function makeRed(){
    setTimeout(trafficLightE3.style.background = 'red', 3000);
    trafficLightE3.removeEventListener('click',makeRed)
    trafficLightE3.style.background = 'black';
    //trafficLightE3.addEventListener('click', makeRed, false);
}

document.addEventListener('click', (event)=>{
    if(event.target.id == 'green'){     
        makeGreen(), false;
    }else if(event.target.id == 'yellow'){   
        makeYellow(), false;
    }else if(event.target.id == 'red'){   
        makeRed(), false;
    }; 
});   

