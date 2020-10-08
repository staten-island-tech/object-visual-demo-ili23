import { menu, saleDay } from "./menu";
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

function init(){
  saleDay.forEach((element) => {
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <ul class="item-list">
      <li class="item-name item-value">${element.name}</li>
      <li class="item-price item-value">$${element.price}</li>
      <li class="item-vegetarian item-value">${element.vegetarian}</li>
      <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
      <li class="item-in-stock item-value">
        ${element.inStock}
        </li>
    </ul>  
    `
    );
    });
  };
  //text will be template literal ``
  //Instock should say ${`item.instock`}
  /*DOMSelectors.fullMenuButton.addEventListener("click", function(e) {
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
  DOMSelectors.resetButton.addEventListener("click", function(e){
    DOMSelectors.displayContainer.innerHTML = "";
  });*/


  init();
  // Create sale day function and create standard function
//init funciton runs switch statement which chooses between two functions 




       /*  menu.forEach((element) => {
        DOMSelectors.displayContainer.insertAdjacentHTML(
          "afterbegin",
          `
          <ul class="item-list">
          <li class="item-name item-value">${element.name}</li>
          <li class="item-price item-value">$${element.price}</li>
          <li class="item-vegetarian item-value">${element.vegetarian}</li>
          <li class="item-image"><img class="item-image" src="${element.img}" alt=""/></li>
          <li class="item-in-stock item-value">
            ${element.inStock}
            </li>
        </ul>  
        `
        );
      
      //text will be template literal ``
      //Instock should say ${`item.instock`}
  }) */