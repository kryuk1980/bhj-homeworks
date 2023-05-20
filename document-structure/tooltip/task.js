const tooltipLinks = [...document.querySelectorAll('.has-tooltip')];

tooltipLinks.forEach(item => {
    item.insertAdjacentHTML("afterend", `
            <div class="tooltip">
            </div>
        `);
    item.addEventListener('click', evt => {
        evt.preventDefault();

        let tooltip = document.querySelector('.tooltip');
        if (item.getAttribute('title') == tooltip.textContent) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.textContent = item.getAttribute('title');
            tooltip.classList.add('tooltip_active');
            tooltip.style.cssText = 'position: absolute;'
            let coords = getCoords(item);
            tooltip.style.left = coords.left + 'px';
            tooltip.style.top = coords.bottom + 'px';
        }
    });
});

function getCoords(item) {
    let box = item.getBoundingClientRect();

    return {
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}