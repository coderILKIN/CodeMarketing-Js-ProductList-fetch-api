let basketBtn = document.querySelector(".basket-logo");

let basketlist = document.querySelector(".basket-list");

let gridcontain = document.querySelector(".grid-container");

let todoElements = document.getElementsByClassName("grid-item");


fetch("https://fakestoreapi.com/products")
.then(async (response) => {

  let todos = await response.json();

  console.log(todos);

  // todos.forEach((todo) => {
  //   console.log(todo);
  // });

  showproduct(todos);

})



// let newArr = JSON.parse(localStorage.getItem("newmeh")) || [];

// basketBtn.addEventListener("click", function(e) {
//     e.preventDefault();
//     e.stopPropagation();

//     if (basketlist.style.display == "none") {
//         basketlist.style.display = "block";
//     } else {
//         basketlist.style.display = "none";
//     }

    
//     basketlist.innerHTML = '';
//     BasketListshow(newArr);
// });

function showproduct(products) {
     products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add("grid-item");
        productDiv.setAttribute("data-id",`${product.id}`)
        productDiv.innerHTML = `<i class="fa-regular fa-heart"></i>`

        let image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        productDiv.appendChild(image);

        let title = document.createElement("h4");
        title.textContent = product.title;
        productDiv.appendChild(title);

        let price = document.createElement('span');
        price.classList.add("money");
        price.textContent = `$${product.price}`;
        productDiv.appendChild(price);

        let addbutton = document.createElement("button");
        addbutton.setAttribute("data-id",`${product.id}`);
        addbutton.textContent = "Add to Cart";
        productDiv.appendChild(addbutton);

        addbutton.addEventListener("click", function(e) {
          let id = e.target.getAttribute("data-id");
            let pro = {
                idd: id,
                price: product.price,
                img: product.image
            }
            newArr.push(pro);

            
            localStorage.setItem("newmeh", JSON.stringify(newArr));

            basketlist.innerHTML = ''; 
            BasketListshow(newArr);  
        });

        gridcontain.appendChild(productDiv);
    });



    for (const todoElement of todoElements) {

      todoElement.addEventListener("click", function(e){
        let id = Number(e.currentTarget.getAttribute("data-id"));
        // console.log(e.currentTarget)
        // console.log(id)

        window.open(`/about.html?id=${id}`)
      })
      
    }

}




// function BasketListshow(newarrlists) {
//     let fragment = document.createDocumentFragment();
//     newarrlists.forEach((newlist) => {
//         let newli = document.createElement('li');

//         let listimg = document.createElement('img');
//         listimg.src = newlist.img;
//         newli.appendChild(listimg);

//         let listprice = document.createElement('span');
//         listprice.textContent = `$${newlist.price}`;
//         newli.appendChild(listprice);

//         fragment.appendChild(newli);
//     });
//     basketlist.appendChild(fragment);
// }



