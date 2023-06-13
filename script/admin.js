let products = JSON.parse(localStorage.getItem("products"));

let prodList = document.querySelector('#prodList')
displayProducts()

function displayProducts(){
  products.forEach((prod)=>{
    prodList.innerHTML += `
    <tr style="font-size: 20px;">
       <td><img src="${prod.image}" style="width:100px"></td>
       <td>${prod.name}</td>
        <td>${prod.description}</td>
       <td>R${prod.price}</td>
       <td>
       <a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="abtn" style="font-size: 20px;"><i class="bi bi-pencil-square"></i></a></td>
       <td><button class='btn btn-danger'><i class="bi bi-trash" style="font-size: 20px;"></i></button></td>
       </tr>`
  })
}

let addItem = document.querySelector(".abtn");
let sortItem = document.querySelector(".sbtn")
let itemInput = document.querySelector(".i-screen")
let output = document.querySelector(".lis")
let clientItems = []
let tempID =1;
let editbtn;
let dotoDelete;


// add
addItem.addEventListener("click", (event)=>{
  event.preventDefault();
  if(itemInput.value == ""){
      alert("input is empty!")
  }else{
      clientItems.push({
          id: tempID,
          name: itemInput.value,
          date: new Date()
      
      })
      tempID++;
      clientItems.value = "";

      console.log(clientItems);
      // renderList();
  }
})

// Sort
sortItem.addEventListener("click", (event)=>{
  event.preventDefault();
  clientItems = clientItems.sort((a,b) => {
      if (a.name < b.name){
          return -1;
      }else {
          return 1;
      
      }
  })
renderList()
})

// Delete
function  deleteButtons(){
  dotoDelete = [...document.querySelectorAll(".close-btn")];

  dotoDelete.forEach((item) => {
      item.addEventListener('click', deleteItem)
      
  })
}
function deleteItem() {
  let startPoint = dotoDelete.indexOf(event.target);
          clientItems.splice(startPoint, 1);
          localStorage.setItem("itemlist", JSON.stringify(clientItems))
          renderList();
}

// Edit 
function editItem(){
  editbtn = [...document.querySelectorAll('.edit-btn')];
  editbtn.forEach((item)=>{
      item.addEventListener('click', editTodoItem)
  })
  }
  function editTodoItem(){
      let newItem = prompt('Enter new Item:');
      let index = editbtn.indexOf(e.target);
      clientItems[index].name = newItem;
      localStorage.setItem("itemlist", JSON.stringify(clientItems))
      renderList();
  }

  // display list
  function renderList(){
    output.innerHTML = ""
    clientItems.forEach((items)=> {
        if(items.completed === true){
            output.innerHTML +=`
            <div id="input">
                <p id="ptag" class="jsptag">${items.name}</p>
                <div>
                <button class="edit-btn">edit</button>
                <button type="button" id="close-btn${items.id}" class="close-btn">&times</button>
                </div>
            </div>
                `
    }else {
        output.innerHTML +=`
            <div id="input">
                <p id="ptag">${items.name}</p>
                <div>
                <button class="edit-btn">edit</button>
                <button type="button" id="close-btn${items.id}" class="close-btn">&times</button>
                </div>
            </div>
                `
            }
})
    deleteButtons();
    editItem()
}
renderList()





// let products = JSON.parse(localStorage.getItem("products"));
// console.log(products)

// let prodList = document.querySelector("#prodsList");
// // let ProdOut = "";

// function displayProducts(){
//   products.forEach((prod, index) => {
//     console.log(prod)
//     console.log(index)
//     prodList.innerHTML = `
//       <tr style="font-size: 12px;">
//       <td><img src="${prod.image}" style="width: 60px; height: 50px;"></td>
//       <td>${prod.name}</td>
//        <td>${prod.description}</td>
//       <td>R${prod.price}</td>
//       <td>
//       <a href="#" class="btn btn-dark btn-sm edit" data-bs-toggle="modal" data-bs-target="#editModal" id="abtn" style="font-size: 12px;">Edit</a>
//       <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//       <div class="modal-dialog">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLabel">Add a Shoe</h5>
//             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//               <form autocomplete="off">
//                   <input class="col-12 my-3" id="Name" type="text" value="${prod.name}" required>
//                   <input class="col-12 my-3" id="Brand" type="text" value="${prod.image}" required>
//                   <input class="col-12 my-3" id="Price" type="text" value="${prod.description}" required>
//                   <input class="col-12 my-3" id="img" type="text" value="${prod.price}"required>
//                   <div class="modal-footer">
//                       <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal" id="submit" value="submit">Edit Shoe</button>
//                   </div>
//               </form>
//           </div>
//         </div>
//       </div>
//     </div>
//       <button class='btn btn-danger'>Del</button>
//       </tr>`;
//     // console.log(prods);  
//   });
// }

// ProdList.innerHTML = ProdOut;

// let submit = document.querySelector("#submit");

// function add() {
//   // prods.push({
//   //   ID,
//   //   name,
//   //   Imimageg,
//   //   price,
//   //   description,
//   // });
//   prodList.innerHTML = ''
//   products.forEach((prods,i)=>{
//     prodList.innerHTML += `<tr>
//                 <td>${products.name}</td>
//                 td><img src="${products.image}" style="width: 60px; height: 50px;"></td>
//                <td>${products.description}</td>
//                <td>${products.price}</td>
//                <td><a href="#" class="btn btn-dark btn-sm">Edit</a></td>
//                <td><a href="#" class="btn btn-primary btn-sm">Del</a></td>
//                 </tr>`
//   })
//   // prods.map((prod) => {
//   //   tableData += `
//   //            <tr>
//   //            <td>${prod.name}</td>
//   //            td><img src="${prod.image}" style="width: 60px; height: 50px;"></td>
//   //           <td>${prod.description}</td>
//   //           <td>${prod.price}</td>
//   //           <td><a href="#" class="btn btn-dark btn-sm">Edit</a></td>
//   //           <td><a href="#" class="btn btn-primary btn-sm">Del</a></td>
//   //            </tr>`;
//   // });
//   // document.getElementById("prodsList").innerHTML = tableData;
//   localStorage.setItem("products", JSON.stringify(products)); 
// }

// localStorage.setItem("productsP", JSON.stringify(products));

// document.getElementById("prodsList").addEventListener("click", (e) => {
//   prodDelete = e.target;
//   if (prodDelete.classList[3] == "delete") {
//     let testarr = JSON.parse(localStorage.getItem("productsP"));
//     let newArr = testarr.splice(testarr[prodDelete.id], 1);
//     console.log(newArr);
//     prodDelete.parentElement.parentElement.remove();
//     localStorage.removeItem("productsP", JSON.stringify(prods.prod));
//     console.log(prods.prod);
//   }

//   localStorage.setItem("productsP", JSON.stringify(products));
// });

// localStorage.setItem("productsP", JSON.stringify(products));

// document.getElementById("prodsList").addEventListener("click", (e) => {
//   prodEdit = e.target;
//   if (prodEdit.classList.contains("edit")) {
//     prodEditRow = prodEdit.parentElement.parentElement;
//     document.querySelector("#ID").value;
//     document.querySelector("#name").value;
//     document.querySelector("#description").value;
//     document.querySelector("#price").value;
//     document.querySelector("#image").value;
//   }
// });\

// displayProducts()