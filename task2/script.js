const consoleLog = document.querySelector('#consoleLog');
const alertT = document.querySelector('#alert');
const promptT = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
        alert('Метод для вывода сообщения в веб-консоль.');
})

alertT.addEventListener('click', () => {
        alert('Показывает диалоговое окно с сообщением и кнопкой "OK". Ждёт, пока пользователь нажмёт кнопку «ОК».' );
})

promptT.addEventListener('click', () => {
        let textInput = prompt('Отображает диалоговое окно с запросом на ввод текста и кнопками "OK"/ "Отмена".', '' );
        textInput ? alert(textInput) : alert ("Ой, вы не ввели текст(. Попробуйте еще раз.");
        
        /* еще один вариант реализации: 
        let textInput;
        do {textInput = prompt('Отображает диалоговое окно с запросом на ввод текста и кнопками "OK"/ "Отмена".', '' );
        } while(textInput == '');
        */
       
})