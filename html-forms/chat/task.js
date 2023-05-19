const chatWidget = document.querySelector('.chat-widget');
const inputField = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const chatMessages = [
    'Привет',
    'Я ещё сплю',
    'У нас всё хорошо',
    'Какой у вас вопрос',
    'Не беспокойте меня понапрасно',
    'Не понял, повторите вопрос',
    'Ну и денёк сегодня',
];
let timer;

function addMessageClient() {
    clearTimeout(timer);
    let time = new Date();
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${inputField.value}
            </div>
        </div>
    `;
    timer = setTimeout(addMessage, 10000);
}

function addMessage() {
    clearTimeout(timer);
    let time = new Date();
    const message = Math.floor(Math.random() * chatMessages.length);
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${chatMessages[message]}
            </div>
        </div>
    `;
    timer = setTimeout(addMessage, 10000);
    messages.scrollTop = messages.scrollHeight;
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

chatWidget.onkeydown = (event) => {
    if (event.key === 'Enter' && inputField.value) {
        addMessageClient();
        inputField.value = '';
        const timer = setTimeout(addMessage, 500);
    }
}

timer = setTimeout(addMessage, 10000); 