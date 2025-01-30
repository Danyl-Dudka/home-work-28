const typePhones = document.querySelector('.category_phones');
const typeLaptops = document.querySelector('.category_laptops');

const phonesProducts = document.querySelector('.phones_products_ul');
const laptopsProducts = document.querySelector('.laptops_products_ul');

const productsInfo = document.querySelector('.products_info');

typePhones.addEventListener('click', function() {
    laptopsProducts.classList.remove('active')
    phonesProducts.classList.add('active');
    productsInfo.textContent = '';
})
typeLaptops.addEventListener('click', function () {
    phonesProducts.classList.remove('active');
    laptopsProducts.classList.add('active');
    productsInfo.textContent = '';
});

function handleProductClick(event) {
    const productName = event.target.getAttribute('data-name');
    const productPrice = event.target.getAttribute('data-price');

    productsInfo.innerHTML = `This is ${productName}. Price: $${productPrice}`;
    
    productsInfo.innerHTML += generateSliderLayout(productName);

    initializeSlider();
}

document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("click", handleProductClick);
});
document.querySelectorAll(".product").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".products_info").innerHTML = generateSliderLayout(item.dataset.name);
    });
});
