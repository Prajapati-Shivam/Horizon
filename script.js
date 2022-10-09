// SLIDER

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let products = `
[
  {
    "id": 1,
    "category": "Men's Clothing",
    "name": "Casual T-shirt",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "price": 2000,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 2,
    "category": "Men's Clothing",
    "name": "Casual Slim-fit",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "price": 3500,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 3,
    "category": "Men's Clothing",
    "name": "Fjallraven",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "price": 4999,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 4,
    "category": "Men's Clothing",
    "name": "Cotten Jacket",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "price": 3900,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 5,
    "category": "Women's Clothing",
    "name": "Women T-shirt",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "price": 999,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 6,
    "category": "Women's Clothing",
    "name": "Women T-shirt",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "price": 799,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 7,
    "category": "Women's Clothing",
    "name": "Women Short-sleeve",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "price": 699,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 8,
    "category": "Women's Clothing",
    "name": "Rain Jacket",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "price": 2900,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 9,
    "category": "Electronics",
    "name": "Acer SB220Q",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "price": 22000,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 10,
    "category": "Electronics",
    "name": "Samsung 49-Inch Monitor",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "price": 63500,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 11,
    "category": "Electronics",
    "name": "WD 4TB Gaming Drive",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "price": 8999,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 12,
    "category": "Electronics",
    "name": "WD 2TB Elements Portable",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "price": 5000,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 13,
    "category": "Jewellery",
    "name": "Women's Bracelet",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "price": 6000,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 14,
    "category": "Jewellery",
    "name": "Solid gold ring",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "price": 10500,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 15,
    "category": "Jewellery",
    "name": "Gold plated Ear-ring",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "price": 2299,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  },
  {
    "id": 16,
    "category": "Jewellery",
    "name": "Diamond ring",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "price": 53900,
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ut excepturi officia possimus aliquid ducimus nihil esse explicabo. Dolorem, ullam sapiente. Unde perferendis, ipsa asperiores maxime facilis laborum nostrum? Laborum earum vitae est, quasi non repellendus minus minima distinctio voluptatum molestias omnis eveniet repellat tenetur ut hic, voluptate rem!"
  }
]`

let product = JSON.parse(products)

let columnContainer = document.getElementsByClassName("column");
for (var i = 0; i < columnContainer.length; i++) {
  let productBox = columnContainer[i];
  productBox.addEventListener("click", function (event) {
    let productClicked = event.target;
    getProductsInfo(productClicked)
    window.open("product.html", "_self");
    
  });
}

function getProductsInfo(productClicked) {
  let productInfo = {
    name: productClicked.getElementsByClassName('product-name').textContent,
    price: productClicked.querySelector('.product-price'),
    image: productClicked.getElementsByClassName('product-image')[0].firstElementChild.src,
  }
  
  setProductInfo(productInfo);
}

function setProductInfo(productInfo) {
  let image = document.getElementsByClassName('desc-image')[0].firstElementChild
  image.src = productInfo.image
  let info = document.getElementById('info')
  let name = document.getElementById('product-name')
  name.innerText = productInfo.name
}

let productName = document.getElementsByClassName('product-name')
let productPrice = document.getElementsByClassName('product-price')
let productImage = document.getElementsByClassName('product-image')
let sectionTitle = document.getElementsByClassName('section-title')

productName[0].innerText = product[0].name;
productPrice[0].innerText = "₹" + product[0].price;
productImage[0].firstElementChild.src = product[0].image;

productName[1].innerText = product[1].name;
productPrice[1].innerText = "₹" + product[1].price;
productImage[1].firstElementChild.src = product[1].image;

productName[2].innerText = product[2].name;
productPrice[2].innerText = "₹" + product[2].price;
productImage[2].firstElementChild.src = product[2].image;

productName[3].innerText = product[3].name;
productPrice[3].innerText = "₹" + product[3].price;
productImage[3].firstElementChild.src = product[3].image;

productName[4].innerText = product[4].name;
productPrice[4].innerText = "₹" + product[4].price;
productImage[4].firstElementChild.src = product[4].image;

productName[5].innerText = product[5].name;
productPrice[5].innerText = "₹" + product[5].price;
productImage[5].firstElementChild.src = product[5].image;

productName[6].innerText = product[6].name;
productPrice[6].innerText = "₹" + product[6].price;
productImage[6].firstElementChild.src = product[6].image;

productName[7].innerText = product[7].name;
productPrice[7].innerText = "₹" + product[7].price;
productImage[7].firstElementChild.src = product[7].image;

productName[8].innerText = product[8].name;
productPrice[8].innerText = "₹" + product[8].price;
productImage[8].firstElementChild.src = product[8].image;

productName[9].innerText = product[9].name;
productPrice[9].innerText = "₹" + product[9].price;
productImage[9].firstElementChild.src = product[9].image;

productName[10].innerText = product[10].name;
productPrice[10].innerText = "₹" + product[10].price;
productImage[10].firstElementChild.src = product[10].image;

productName[11].innerText = product[11].name;
productPrice[11].innerText = "₹" + product[11].price;
productImage[11].firstElementChild.src = product[11].image;

productName[12].innerText = product[12].name;
productPrice[12].innerText = "₹" + product[12].price;
productImage[12].firstElementChild.src = product[12].image;

productName[13].innerText = product[13].name;
productPrice[13].innerText = "₹" + product[13].price;
productImage[13].firstElementChild.src = product[13].image;

productName[14].innerText = product[14].name;
productPrice[14].innerText = "₹" + product[14].price;
productImage[14].firstElementChild.src = product[14].image;

productName[15].innerText = product[15].name;
productPrice[15].innerText = "₹" + product[15].price;
productImage[15].firstElementChild.src = product[15].image;


// CART 

let addToCartButton = document.getElementsByClassName('btn')

for (var i=0; i<addToCartButton.length; i++) {
  let buttons = addToCartButton[i];
  buttons.addEventListener('click', addToCart)
}

function addToCart() {
  let cartContainer = document.getElementById('cart-container')
  let cartItem = document.createElement('div')
  cartItem.classList.add('cart-item')
  cartItem.innerHTML = `
      <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" id="cart-image">
      <p id="cart-p-name">Casual tshirt</p>
      <span id="cart-price">1243</span>
      <input type="number" value="1" id="cart-quantity">
      <span id="cart-total">23423</span>
      <button id="cart-item-remove"><i class="fa fa-remove"></i></button>`

  cartContainer.appendChild(cartItem)
  console.log('works')
}

let removeBtn = document.getElementsByClassName('cart-item-remove')
for (var i=0; i<removeBtn.length; i++) {
  let buttons = removeBtn[i];
  buttons.addEventListener('click', function(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove();
  })
}

