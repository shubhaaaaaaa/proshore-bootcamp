const shoppingCart = []

//list of products available for user to buy
const availableListings = [
    { product: 'Phone', price: 300 },
    { product: 'Smart TV', price: 220 },
    { product: 'Gaming Console', price: 150 },
]

//display the available products in the shopping list section
let cashRegisterList = ''
availableListings.forEach(element => {
    cashRegisterList += `<p>Product: ${element.product}, Price: ${element.price}</p>`
});
document.querySelector('.cash-register-products').innerHTML = cashRegisterList;

//addItem button functionality
const addItem = () => {
    let userPrompt = (prompt('What item do you want to buy?')).toLowerCase()
    availableListings.forEach(element => {
        if (userPrompt == (element.product).toLowerCase()) {
            shoppingCart.push(element)
            document.querySelector('.div--shopping-cart').innerHTML += `<p>Product: ${element.product}, Price: ${element.price}</p>`;
        }
    });
}

//calculateTotalPrice button functionality
let totalPrice = ''
const calculateTotalPrice = () => {
    totalPrice = shoppingCart.reduce((total, item) => {
        return total + item.price
    }, 0)
    document.querySelector('.div--shopping-cart').innerHTML += `<p><b>Total: </b>${totalPrice}</p>`;
}

//pay button functionality
const pay = (totalPrice) => {
    let discount
    let paymentAmount = prompt("Enter payment amount by user")

    if (totalPrice < 400) {
        discount = 0.1 * totalPrice
        totalPrice -= discount
    }
    document.querySelector('.div--shopping-cart').innerHTML +=
        `<p><b>Discount: </b>${discount}</p>
        <p><b>Final Price: </b>${totalPrice}</p>`;

    if (paymentAmount >= totalPrice) {
        paymentAmount -= totalPrice
        alert(`Thank you. Payment received. Your remaining change is ${paymentAmount}`)
    }
    else {
        alert(`Insufficient balance to proceed. You total is ${totalPrice}`)
    }
}