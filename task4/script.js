const linkChange = document.querySelector('a');

linkChange.addEventListener('click', function (event) { 
    this.textContent = prompt('Введите текст');  
    event.preventDefault();
});






