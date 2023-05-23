const progress = document.getElementById('progress');
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
        let total = event.total;
        let loaded = event.loaded;
        let delta = loaded / total;

        progress.value = delta;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData(form);
    xhr.send(formData);
})