"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Bryan Vargas
   Date:   04/05/19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

//Once the page loads the setupCart function shall run.
window.onload = setupCart;

//This function is meant to run the "addItem" function once the Buttons are clicked.
function setupCart() {
      var addButtons = document.getElementsByClassName("addButton");

      //Loops through all the buttons, listening for clicks
      for (var i = 0; i < addButtons.length; i++) {
            document.addEventListener("onclick", addItem);
      }
}

// The "addItem" function is meant to search for values of the items and place them in the foodcart aside.
function addItem(e) {

      //each variable holds a certain value. They are placed together and a copy is made that shall be added to the aside (Cart);
      var foodItem = e.nextElementSibling.value;
      var foodID = foodItem.getAttribute("id");
      var foodDescription = foodItem.cloneNode(true);
      var cartBox = document.getElementById("cart");
      var duplicateOrder = false;

      //This foor loop is meant to compare ID's before changing the value of each child, for every 
      for (var i = 0; i < cartBox.length; i++) {
            if (cartBox.childNodes == foodID) {
                  cartBox.firstChild() += 1;
            }
      }
      //This if statement is meant to create certain parts that go in the cart, such as orderCount
      if (duplicateOrder !== false) {
            var orderCount = document.createElement("span");
            orderCount = "1";
            foodDescription += orderCount;
            foodDescription.appendChild(cartBox);
      }
}