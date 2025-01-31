const typePhones = document.querySelector('.category_phones');
const typeLaptops = document.querySelector('.category_laptops');
const phonesProducts = document.querySelector('.phones_products_ul');
const laptopsProducts = document.querySelector('.laptops_products_ul');

const productsInfo = document.querySelector('.products_info');

typePhones.addEventListener('click', function () {
    laptopsProducts.classList.remove('active')
    phonesProducts.classList.add('active');
    productsInfo.textContent = '';
})
typeLaptops.addEventListener('click', function () {
    phonesProducts.classList.remove('active');
    laptopsProducts.classList.add('active');
    productsInfo.textContent = '';
});

function initializeButton() {
    return ` <button type="button" class="buy-btn">BUY NOW</button>`
}

function showOrderForm() {
    document.querySelector('.finish_order').classList.remove('hidden');
    document.querySelector('.main').classList.add('hidden');
}

function orderFinished() {
    document.querySelector('.finish_order').classList.add('hidden');
    document.querySelector('.main').classList.remove('hidden');

    phonesProducts.classList.remove('active');
    laptopsProducts.classList.remove('active');
    productsInfo.textContent = ''; 
}

function handleProductClick(event) {
    const productName = event.target.getAttribute('data-name');
    const productPrice = event.target.getAttribute('data-price');

    productsInfo.innerHTML = `This is ${productName}. Price: $${productPrice}`;

    productsInfo.innerHTML += generateSliderLayout(productName);

    initializeSlider();
    productsInfo.innerHTML += initializeButton();

    setTimeout(() => {
        const buyBtn = document.querySelector('.buy-btn');
            buyBtn.addEventListener('click', showOrderForm);
        const finishBtn = document.querySelector('.finish_button');
            finishBtn.addEventListener('click', orderFinished);
    }, 100);
}
document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("click", handleProductClick);
});
