const modal = document.querySelector('.modal')


function getSesionModal() {
    if (!sessionStorage.length) {
        sessionStorage.setItem('flag', 'active');
        modal.classList.add('modal_active')

        document.querySelector('.modal__close').onclick = () => {
            modal.className = 'modal'
        }
    }
}

getSesionModal()
