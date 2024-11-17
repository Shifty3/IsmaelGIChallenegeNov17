function sharePizza(x,y){
    //rounds the result to the hundredths place
    let slicePerPerson = (x/y).toFixed(2)

    return `Each person get ${slicePerPerson} slices of pizza, from our ${x} slice of pizza`;
}

//testing function
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));