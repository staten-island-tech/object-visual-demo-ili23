import { menu, saleDay, saleMenu } from "./menu";
const date = new Date();
const day = date.getDay(); // gives an integer

const DOMSelectors = {
  //encapsulation
    displayContainer: document.querySelector(".container"),
    fullMenuButton: document.querySelector(".full-btn"),
    veggieButton: document.querySelector(".veggie-btn"),
    stockButton: document.querySelector(".stock-btn"),
    resetButton: document.querySelector(".reset-btn"),
    saleItems: document.querySelector(".sale-btn")
}
function veggie(){
  const veggieOptions = menu.filter((element)=> element.vegetarian === true);
  DOMSelectors.veggieButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
    veggieOptions.forEach((element)=>{
       DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<ul class="item-list">
        <li class="item-name item-value">${element.name}</li>
        <li class="item-price item-value">$${element.price}</li>
        <li class="item-vegetarian item-value">${element.vegetarian}</li>
        <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
        <li class="item-in-stock item-value">${element.inStock}</li>
      </ul>`
      );
    });
  });
};
function full(){
  DOMSelectors.fullMenuButton.addEventListener("click", function(e) {
    DOMSelectors.displayContainer.innerHTML = "";
    menu.forEach((element) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `<ul class="item-list">
      <li class="item-name item-value">${element.name}</li>
      <li class="item-price item-value">$${element.price}</li>
      <li class="item-vegetarian item-value">${element.vegetarian}</li>
      <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
      <li class="item-in-stock item-value">${element.inStock}</li>
    </ul>`
    )
    });
});
};
function instock(){
  const stockOptions = menu.filter((element)=> element.inStock === true);
  DOMSelectors.stockButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
    stockOptions.forEach((element)=>{
      DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
      `<ul class="item-list">
      <li class="item-name item-value">${element.name}</li>
      <li class="item-price item-value">$${element.price}</li>
      <li class="item-vegetarian item-value">${element.vegetarian}</li>
      <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
      <li class="item-in-stock item-value">${element.inStock}</li>
    </ul>`
    );
    });
  });
};
function reset(){
  DOMSelectors.resetButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
  });
};
function init(){
  veggie();
  full();
  instock();
  reset();
 saleMenu.forEach((element) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <ul class="item-list">
      <li class="item-name item-value">${element.name}</li>
      <li class="item-price item-value">$${element.price}</li>
      <li class="item-vegetarian item-value">${element.vegetarian}</li>
      <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
      <li class="item-in-stock item-value">${element.inStock}</li>
    </ul>  
    `
    );
    }); 
  };



  init();
  // Create sale day function and create standard function
//init funciton runs switch statement which chooses between two functions 




  