const area = document.getElementById('editor');


function getNewBtn() {
    let btn = document.createElement('button')
    btn.appendChild(document.createTextNode('Delete all...'))
    btn.className = 'clear-btn'
    btn.onclick = () => {
        localStorage.clear()
        document.querySelector('.clear-btn').remove();
        area.value = ''
    }
    return btn
}

function localCheck() {
    if (localStorage.length) {
        area.value = localStorage.getItem('text');
        let btn = getNewBtn()
        document.querySelector('.card').append(btn)
    }
}

localCheck()

function debounce(func, ms) {
    let timeoutId;
    return function () {
        const a = () => {
            func.apply(this, arguments)
        };
        clearInterval(timeoutId);
        timeoutId = setTimeout(a, ms)
    }
}

function onChange(e) {
    let value = e.target.value;
    localStorage.setItem('text', value)
}

onChange = debounce(onChange, 200);
area.addEventListener('input', onChange)