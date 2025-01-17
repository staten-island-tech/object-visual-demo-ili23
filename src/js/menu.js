const menu = [
    {
      name: "Pizza Slice",
      vegetarian: true,
      price: 2.0,
      img:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      inStock: true,
    },
    {
      name: "Salad",
      vegetarian: true,
      price: 5.0,
      img:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      inStock: true,
    },
    {
      name: "Soup",
      vegetarian: true,
      price: 3.0,
      img:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      inStock: true,
    },
    {
      name: "Grilled Cheese",
      vegetarian: true,
      price: 4,
      img:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
      inStock: false,
    },
    {
      name: "Roast Chicken",
      vegetarian: false,
      price: 8.0,
      img:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      inStock: true,
    },
    {
      name: "Steak",
      vegetarian: false,
      price: 10.0,
      img:
        "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
      inStock: false,
    },
    {
      name: "Cheeseburger",
      vegetarian: false,
      price: 6,
      img:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
      inStock: true,
    },
    {
      name: "Ice Cream",
      vegetarian: false,
      price: 3.0,
      img:
        "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      inStock: true,
    },
  ];

const saleDay = menu.map(element => element.price *0.5);

const saleMenu = [
  {
    name: "Pizza Slice",
    vegetarian: true,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Salad",
    vegetarian: true,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Soup",
    vegetarian: true,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    inStock: true,
  },
  {
    name: "Grilled Cheese",
    vegetarian: true,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    inStock: false,
  },
  {
    name: "Roast Chicken",
    vegetarian: false,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    inStock: true,
  },
  {
    name: "Steak",
    vegetarian: false,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1574969884448-fe5bce3d0d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    inStock: false,
  },
  {
    name: "Cheeseburger",
    vegetarian: false,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=902&q=80",
    inStock: true,
  },
  {
    name: "Ice Cream",
    vegetarian: false,
    price: saleDay,
    img:
      "https://images.unsplash.com/photo-1566454419290-57a64afe30ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    inStock: true,
  },
];


export { menu, saleDay, saleMenu};