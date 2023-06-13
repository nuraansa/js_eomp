let products = JSON.parse(localStorage.getItem("products"));

let prodCart = document.querySelector('#prodCart')
displayProducts()

function displayProducts(){
  products.forEach((prod)=>{
    prodCart.innerHTML += `
    <tr style="font-size: 20px;">
       <td><img src="${prod.image}" style="width:100px"></td>
       <td>${prod.name}</td>
        <td>${prod.description}</td>
       <td>R${prod.price}</td>
       <td>${prod.quantity}</td>
       <td><button class='btn btn-danger'><i class="bi bi-trash" style="font-size: 30px;"></i></button></td>
       </tr>`
  })
}
