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
    let orderForm = document.forms[0];

    let clientName = orderForm["name"].value;
    let patternName = /^[A-Z]{1}[a-z]{1,14}$/
    let resultName = patternName.test(clientName);

    let clientAmount = orderForm["order_amount"].value;

    let clientPhone = orderForm["phone"].value;
    let patternPhone = /^\+380\d{9}$/
    let resultPhone = patternPhone.test(clientPhone);

    let clientCity = orderForm["city"].value;

    if (resultName == false) {
        alert("You have entered a incorrect name")
    } else if (clientAmount < 1 || clientAmount > 10) {
        alert("You have entered a wrong amount")
    } else if (resultPhone == false) {
        alert("Your phone number is incorrect")
    } else if (clientCity == -1) {
        alert("You haven't chosen your city")
    } 
    else {

        document.querySelector('.finish_order').classList.add('hidden');
        document.querySelector('.congrats_div').classList.remove('hidden');
        document.querySelector('.finished_name').textContent = "Name: " + clientName +";";
        document.querySelector('.finished_amount').textContent = "Amount: " + clientAmount +";";
        document.querySelector('.finished_phone').textContent = "Phone number: " + clientPhone +";";
        document.querySelector('.finished_city').textContent = "City: " + clientCity +";";
    }
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
