const run = function () {
    // Exercise 2
    document.getElementById("ptag-id").style.backgroundColor = "red";
    // Exercise 3 - Extra Credit
    const fruits = ['Apple', 'Banana', 'Orange'];
    fruitCart = document.createElement('ol');
    fruitCart.textContent = "Fruit Cart";
    var i;
    for(i = 0; i<fruits.length; i++){
      var fruit = document.createElement("li");
      fruit.id = "fruit";
      fruit.innerText = fruits[i];
      fruitCart.appendChild(fruit);
    }

    document.getElementById("shopping-cart").appendChild(fruitCart);
    // hint 1: how do we loop through items in JavaScript

    // hint 2: use how do we create an element and append an element?
}

run()
