const urlParams = new URLSearchParams(window.location.search);

// console.log(urlParams);

// console.log(urlParams.get("id"))


let todoId = Number(urlParams.get("id"));


let todoTitle = document.querySelector(".todoTitle");

let todoPrice = document.querySelector(".todoPrice");

let todoImage = document.querySelector(".todoImg");

let todoDecription = document.querySelector(".todoDesc");

fetch(`https://fakestoreapi.com/products/${todoId}`)
.then(async (resp) => {
   let todo = await resp.json();

   todoImage.src = todo.image
   todoTitle.textContent=todo.title;
   todoPrice.textContent=`$${todo.price}`;
   todoDecription.textContent = todo.description;

    //   console.log(todo);
})

