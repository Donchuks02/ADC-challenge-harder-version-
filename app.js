let add_to_cart_btns = document.querySelectorAll('.addToCart-Btn')
let main_container = document.querySelector('.cart-container')
let quantityFields = document.getElementsByClassName('num')
let checkout_btn = document.querySelector('.Checkout-btn')
let removeBtns = document.getElementsByClassName('deleteBtn')
let activatePopUpContainer = document.querySelector('.pop-up-section')
const total_purchase = document.querySelector('#totalPurchase')
const roundedUpValue = document.querySelector('#roundedUpValue')
const amountDonated = document.querySelector('#donatedAmount')
const yesButton = document.querySelector('#yesBtn')
const noButton = document.querySelector('#noBtn')


for (let i = 0; i < add_to_cart_btns.length; i++) {
    add_to_cart_btns[i].addEventListener('click', addTocart)

}

function addTocart(e) {
    let btn = e.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[1].innerText
    let itemTotal = btn_parent.children[2].innerText
    let itemImage = btn_grandparent.children[0].src




    let itemContainer = document.createElement('div')
    itemContainer.className = 'cart-item'
    itemContainer.innerHTML = ` <img src="${itemImage}" alt="">
                <div class="item-details">

                    <p>${itemName}</p>

                    <p>Price :
                    <span class="item-price">${itemPrice}</span></p>

                </div>
                <div><input class="deleteBtn" type="button" value="&times;"></div>`
    main_container.append(itemContainer)






    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeItem)

    }

    grandTotal()

}













function grandTotal() {
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    let total_price = document.getElementsByClassName('item-price')

    for (let i = 0; i < total_price.length; i++) {
        total_price_content = Number(total_price[i].innerText.replace('$', ''))
        total += total_price_content
    }

    grand_total.children[1].innerText = '$' + total
    grand_total.children[1].style.fontWeight = 'bold'
    return total;
    return grand_total.children[1].innerText

}




function removeItem(event) {
    remove_btn = event.target
    remove_btn_grandparent = remove_btn.parentElement.parentElement
    remove_btn_grandparent.remove()
    grandTotal()

}



checkout_btn.addEventListener('click', function() {
    // grandTotal()
    activatePopUpContainer.classList.remove('hidden')
    total_purchase.textContent = grandTotal()
    roundedUpValue.textContent = `${Math.ceil(grandTotal())}.00`;
    let rndValue = Math.ceil(grandTotal()) - grandTotal()
    let roundedResult = parseFloat(rndValue.toPrecision(12))
    amountDonated.textContent = roundedResult


})

yesButton.addEventListener('click', function() {
    let inputValue = (grandTotal())
    let result = `$ ${ Math.ceil(grandTotal())}`
        // inputValue = result
        // inputValue.textContent = result
        // inputValue.textContent = result
    let grand_total = document.querySelector('.grand-total').children[1].textContent = result
    activatePopUpContainer.classList.add('hidden')

})


noButton.addEventListener('click', function() {

    activatePopUpContainer.classList.add('hidden')

})