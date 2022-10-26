const consoleLog = document.querySelector('#consoleLog');
const alertT = document.querySelector('#alert');
const promptT = document.querySelector('#prompt');


consoleLog.addEventListener('click', () => {
        alert('Метод для вывода сообщения в веб-консоль');
})


alertT.addEventListener('click', () => {
        alert('Показывает диалоговое окно с сообщением и кнопкой "OK"' );
})


promptT.addEventListener('click', () => {
        prompt(' Отображает диалоговое окно с запросом на ввод текста:' );
})