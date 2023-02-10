let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('add')){
            var itemNew = item.cloneNode(true);
            let checkIsset  = false;

            let listCart = document.querySelectorAll('.cart .item');
            listCart.forEach(cart =>{
                if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                    checkIsset = true;
                    cart.classList.add('danger');
                    setTimeout(function(){
                        cart.classList.remove('danger');
                    },1000)
                }
            })
            if(checkIsset == false){
                document.querySelector('.listCart').appendChild(itemNew);
            }

        }
    })
})
function Remove($key){
    let listCart = document.querySelectorAll('.cart .item');
    listCart.forEach(item => {
        if(item.getAttribute('data-key') == $key){
            item.remove();
            return;
        }
    })
}

// Add the checkout button
var checkoutButton = document.createElement("button");
checkoutButton.innerHTML = "Checkout";
document.querySelector(".cart").appendChild(checkoutButton);

// Add the event listener for the checkout button
checkoutButton.addEventListener("click", function() {
  var items = document.querySelectorAll(".cart .item");
  var total = 0;
  items.forEach(function(item) {
    var price = parseFloat(item.getAttribute("data-price"));
    total += price;
  });
  alert("Total: $" + total.toFixed(2));
});

// Get the price and quantity elements
var priceElement = cartBox.getElementsByClassName("price")[0];
var quantityElement = cartBox.getElementsByClassName("number")[0];

// Convert the price string to a number
var price = parseFloat(priceElement.innerText.replace("$", ""));

// Get the quantity value
var quantity = quantityElement.value;

// Add the price times the quantity to the total
total = total + price * quantity;

// Round the total to two decimal places
total = Math.round(total * 100) / 100;

// Update the total price on the page
document.getElementsByClassName("total-price")[0].innerText = "$" + total;


// Add the event listener for the quantity input elements
var quantityInputs = document.getElementsByClassName("number");
for (var i = 0; i < quantityInputs.length; i++) {
quantityInputs[i].addEventListener("change", updateTotal);
}

// Call the updateTotal function when the page loads
updateTotal();
