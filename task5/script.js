const userText = document.querySelector('input');
const userTextField = document.querySelector('#duplicateField');
const buttonClick = document.querySelector('button');

userText.addEventListener('keydown', ()=>{
    userTextField.textContent = userText.value;
})

buttonClick.addEventListener('click', (event) =>{
    console.log(userText.value);
    userText.value = "";
    userTextField.textContent = "";
    event.preventDefault();   
})