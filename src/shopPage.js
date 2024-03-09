if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

const salesTax = .1025;

function ready() {
    var removeCartProductButtons = document.getElementsByClassName('btn-close')
    for (var i = 0; i < removeCartProductButtons.length; i++) {
        var button = removeCartProductButtons[i];
        button.addEventListener('click', removeCartProduct)
    }

    var quantityAmounts = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityAmounts.length; i++) {
        var input = quantityAmounts[i];
        input.addEventListener('change', quantityChanged)
    }

    var addCartButton = document.getElementsByClassName('shop-Product-button')
    for (var i = 0; i < addCartButton.length; i++) {
        var button = addCartButton[i];
        button.addEventListener('click', addCartClick)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', checkoutClicked)
}

function checkoutClicked() {
    if (document.getElementsByClassName('cart-Products')[0].childElementCount > 0){
          alert('Thanks for the purchase. Your cart has now been cleared.') 
    }
    else  {
        alert('Please put items into the cart if you want to complete an order. ') 
    }
 
    var cartProducts = document.getElementsByClassName('cart-Products')[0];
    while (cartProducts.hasChildNodes()) {
        cartProducts.removeChild(cartProducts.firstChild)
    }
    updateCart();
}

function removeCartProduct(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    
    updateCart();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCart();
}

function addCartClick(event) {
    var button = event.target;
    var shopProduct = button.parentElement.parentElement;
    var title = shopProduct.getElementsByClassName('shop-Product-title')[0].innerText;
    var size = shopProduct.getElementsByClassName('shop-Product-size')[0].value;
    var price = shopProduct.getElementsByClassName('shop-Product-price')[0].innerText;
    var imageSrc = shopProduct.getElementsByClassName('shop-Product-image')[0].src;

    addProductToCart(title, size, price, imageSrc);
    updateCart();
}

function addProductToCart(title, size, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartProducts = document.getElementsByClassName('cart-Products')[0]

    var cartRowContents = `
        <div class="cart-Product cart-column">
            <img class="cart-Product-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-Product-title">${title}</span>
        </div>
        <span class="cart-size cart-column">${size}</span>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-close" type="button">X</button>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartProducts.append(cartRow)
    cartRow.getElementsByClassName('btn-close')[0].addEventListener('click', removeCartProduct)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
let cartNumber = document.querySelector(".cartAmount");

function updateCart() {
    cartNumber.innerHTML = 0 + document.getElementsByClassName('cart-Products')[0].childElementCount;
    var cartProductContainer = document.getElementsByClassName('cart-Products')[0];
    var cartRows = cartProductContainer.getElementsByClassName('cart-row');
    var total = 0;
    var totalTax = 0;
    var finalTotal = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        var shipPrice = 0;

        if(document.getElementById('fastShip').checked == true) {
            shipPrice = 9.99;
            document.getElementsByClassName('cart-ship')[0].innerText = '$9.99';
          }else if(document.getElementById('freeShip').checked == true) {
            shipPrice = 0;
            document.getElementsByClassName('cart-ship')[0].innerText = '$0.00'; 
          }
        totalTax = totalTax + (price * quantity) * salesTax;
        total =  total + (price * quantity);    
       
       finalTotal = total * (1 + salesTax) + shipPrice;
       
      
    }

    total = Math.round(total * 100) / 100
    let tax = totalTax.toFixed(2);
    let subtotal = total.toFixed(2);
    let final = finalTotal.toFixed(2);
    document.getElementsByClassName('cart-subtotal')[0].innerText = '$' + subtotal; 
    document.getElementsByClassName('cart-tax')[0].innerText = '$' + tax;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' +  final;
}
