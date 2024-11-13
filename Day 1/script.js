// Create an array 
const fruits = ["apple", "banana", "orange"];
console.log("Created array fruits: " + fruits);

//Create array with multiple values
const random = [654, "ram", true, 5.6, [4,'second layer', false]];
console.log("Created multi-dimensional array random: " + random);

//access values of multi-dimensional array
console.log("Assessing value form multi-dimensional array: " + random[4][1]); 

//indexOf to find the index of the array
console.log("Using indexOf() function: " + random.indexOf("ram"));

//push to add items at the end of the array
random.push("end item");
console.log("Using push() function: " + random);

//unshift to add items at the start of the array
random.unshift("start item");
console.log("Using unshift() function: " + random);

//pop to remove items from end of the array
random.pop("end item");
console.log("Using pop() function: " + random);

//shift to remove items from start of the array
random.shift("start item");
console.log("Using shift() function: " + random);

//slice() presents only the required slice of the whole array
//slice(start index, end index)
const evenNum = [2, 4, 6, 8, 10]
let sliced = evenNum.slice(1, 3)
console.log("Using slice(): " + sliced)
//Expected output: 4,6 (because it leaves the last index, i.e index 3)

//splice() to remove certain number of items from array or add/replace
//splice(where to start, how many to remove, if any to add)
let spliced = evenNum.splice(3,2,800,100);
console.log("Changed values in array using splice(): " + spliced)
console.log("New array using splice(): " + evenNum)

//split() to split the string into array 
let data = "John, Sabrina, Harry";
let names = data.split(',');
console.log("Using split() function: " + names);

//join() to join the array into one string 
console.log("Using join() function: " + names.join(' +'));

//for..of to access every item in an array
for(const fruit of fruits){
    console.log("Output of for...of statement: " + fruit);
}

//map() to access every item in an array
const numbers = [2,4,6,8,10];
function doubles(number){
    return number*2;
}
console.log("Using map() function: " + numbers.map(doubles));

//filter() to check a certain condition
function checkChar(number){
    if(number > 4){
        return number;
    }
}
console.log("Using filter() function: " + numbers.filter(checkChar));

//reduce() to reduce the array down to a single value by using callback function
//it takes a function and initial value as parameters
const employeeData = [
    { name: 'Gopal', salary: 3500 },
    { name: 'Radha', salary: 500 },
    { name: 'Sam', salary: 1500 }
]

const totalSalary = employeeData.reduce((total, employee) => {
    return total + employee.salary
}, 0);

console.log("Using reduce(): The total salary is " + totalSalary)

//addEventListener() adds interactivity by performing certain activity when an element is hovered, pressed, clicked and more
document.getElementById("button-click").addEventListener("click", (event) => {
    alert("How dare you click me?");
})

//another example of event listener that listens to the keys pressed on your keyboard
document.addEventListener('keypress', (event) => {
    console.log("Using addEventListener(): You pressed ", event.key)
})

//rest() collects all the items into an array mostly as a parameter
//spread() expands the items into single elements and copies into another element
const set1 = [1,2,3,4]
const set2 = [...set1, 5, 6, 7] 
console.log("Using spread(): " + set2)
//Expected Output:Using spread(): 1,2,3,4,5,6,7

const displayNames = (...names) => {
    console.log("Using rest(): " + names)
}
displayNames('Radha', 'Himal', 'Chand');
//Expected Output: Using rest(): Radha,Himal,Chand
