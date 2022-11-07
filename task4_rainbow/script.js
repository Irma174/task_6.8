const linkChange = document.querySelector('a');
const bodyColor = document.querySelector('body');

let rainbow = {
    'красный': 'red',
    'оранжевый': 'orange',
    'желтый': 'yellow',
    'зеленый': 'green',
    'голубой': 'aqua',
    'синий': 'blue',
    'фиолетовый': 'violet',
};

function promtEnter(event){   
    const linksEnter = prompt('Напишите один из цветов радуги и измените цвет ссылки'); 
    linkChange.textContent = linksEnter;
    let linkColor = linksEnter.toLowerCase();
    if(linkColor in rainbow){
        linkChange.style.color = rainbow[linkColor];
        bodyColor.style.backgroundImage = 'url(../images/stainless-images-JzCf5Y3XmFU-unsplash.jpg)';
    }else {
        linkChange.textContent = "Цвет радуги введен неверно"; 
        linkChange.style.color = "chocolate"
        bodyColor.style.background = 'white';  
    };
    event.preventDefault();
}

linkChange.addEventListener('click', promtEnter);
