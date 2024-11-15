const availableProduct = [
    { product: 'Phone', price: 300 },
    { product: 'Smart TV', price: 220 },
    { product: 'Gaming Console', price: 150 },
]

let totalContainer = document.querySelector('.js-show-total')
let discount = 0
let total = 0

let discountElement = document.createElement('p')
discountElement.textContent = `Discount - Rs.0`
totalContainer.appendChild(discountElement)

let totalElement = document.createElement('p')
totalElement.textContent = `Total - Rs.0`
totalContainer.appendChild(totalElement)

const showDiscount = (discount) => {
    discountElement.textContent = `Discount - Rs. ${discount}`
}

const showTotal = (total) => {
    totalElement.textContent = `Total - Rs. ${total}`
}

showDiscount(0)
showTotal(0)

let listContainer = document.querySelector('.js-show-available-product')
availableProduct.forEach((item) => {
    let p = document.createElement('p')
    p.textContent = `${item.product} - Rs. ${item.price}`
    listContainer.appendChild(p)
})

let addedItem = []
const addItem = () => {
    let cartContainer = document.querySelector('.js-show-cart-item')
    let userPrompt = (prompt("what do you want to add?")).toLowerCase()
    
    
    // availableProduct.forEach((item) => {
    //     if (userPrompt.toLowerCase() == (item.product).toLowerCase()) {
    //         let p = document.createElement('p')
    //         p.textContent = `The price of ${item.product} is Rs. ${item.price}`
    //         cartContainer.appendChild(p)
            
    //         addedItem.push(item.price)
    //         isFound = true
    //         calculateTotal()
    //     }
    // })
    // if (!isFound) {
    //     alert("Sorry! We can't find what you're looking for.")
    // }

}
const calculateTotal = () => {
    total = 0
    addedItem.forEach((price) => {
        total += price
        console.log(total)
    })
    
    if (total > 400) {
        discount = total * 0.1
        total -= discount
        
        showDiscount(discount)
    }
    showTotal(total)
}

const pay = (total) => {  
    
    if (total == 0) {
        alert("Add an item first")        
    }
    else {        
        let userPayment = prompt("Enter cash amount")
    
        if (userPayment == null) {
            exit()       
        }
        else if (userPayment < -1) {
            alert(`Invalid amount. Your pending payment is Rs. ${total}`)        
        }
        else if (total > userPayment) {
            alert(`Oops! Balance is amount is insufficient. Your total is Rs. ${total}`)
        }
        else if (total == userPayment) {        
            alert(`Thank you! Payment of Rs. ${total} received.`)
        }
        else {
            alert(`Thank you! Payment of Rs. ${total} received. Your change is ${userPayment - total}`)        
        }
    }
}