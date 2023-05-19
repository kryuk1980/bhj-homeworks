const checkBox = Array.from(document.querySelectorAll('.interest__check'));

for (const check of checkBox) {
    check.onchange = () => {
        const interest = check.closest('.interest');
        const interestsChid = interest.querySelectorAll('.interests > .interest');
        for (const child of interestsChid) {
            const input = child.querySelector('.interest__check');
            input.checked = interest.querySelector('.interest__check').checked;
        }
    }
}