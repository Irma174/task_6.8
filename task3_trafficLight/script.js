const trafficLightEl = document.querySelector('#green');
const trafficLightE2 = document.querySelector('#yellow');
const trafficLightE3 = document.querySelector('#red');

document.body.addEventListener('click', (event)=>{
    if(event.target.id == 'green'){
        trafficLightEl.style.background = 'green';
        trafficLightE2.style.background = 'black';
        trafficLightE3.style.background = 'black';
    }else if(event.target.id == 'yellow'){
        trafficLightE2.style.background = 'yellow';
        trafficLightEl.style.background = 'black';
        trafficLightE3.style.background = 'black';
    }else if(event.target.id == 'red'){
        trafficLightE3.style.background = 'red';
        trafficLightEl.style.background = 'black';
        trafficLightE2.style.background = 'black';
    }; 
});



