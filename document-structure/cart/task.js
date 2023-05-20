const prodItems = document.querySelectorAll('.product');
const cartList = document.querySelector('.cart__products');

prodItems.forEach(item => {
    item.addEventListener('click', evt => {
        item.dataset.id = evt.currentTarget.dataset.id;
        let quantity = item.querySelector('.product__quantity-value');
        if (evt.target.classList.contains('product__quantity-control_inc')) {
            quantity.textContent++;
        }

        if (evt.target.classList.contains('product__quantity-control_dec')) {
            quantity.textContent--;
            if (quantity.textContent < 1) {
                quantity.textContent = 1;
            }
        }

        if (evt.target.classList.contains('product__add')) {
            let cartProducts = [...cartList.children];
            let matchProduct = cartProducts.find(elem => elem.dataset.id == item.dataset.id);
            if (matchProduct) {
                let cartQuantity = matchProduct.querySelector('.cart__product-count');
                cartQuantity.textContent = parseInt(cartQuantity.textContent) + parseInt(quantity.textContent);
            } else {
                cartList.insertAdjacentHTML("beforeEnd", `
                    <div class="cart__product" data-id="${item.dataset.id}">
                        <img class="cart__product-image" src="${item.querySelector('.product__image').getAttribute('src')}">
                        <div class="cart__product-count">${quantity.textContent}</div>
                    </div>
                `);
            }
        }
    });
});