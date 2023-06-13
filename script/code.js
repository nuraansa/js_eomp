let myProducts = [
  {
    id: 1,
    name: "Jewel 1",
    price: "00.00",
    image: "https://i.postimg.cc/RZGVBCFL/p1s.jpg",
    description: "something",
  },
  {
    id: 2,
    name: "Jewel 2",
    price: "00.00",
    image: "https://i.postimg.cc/1X2HjZxG/LJ10s.jpg",
    description: "something",
  },
  {
    id: 3,
    name: "Jewel 3",
    price: "00.00",
    image: "https://i.postimg.cc/43gfVK0G/LJ7s.jpg",
    description: "something",
  },
  {
    id: 4,
    name: "Jewel 4",
    price: "00.00",
    image: "https://i.postimg.cc/Zq8kSVVt/p4s.jpg",
    description: "something",
  },
  {
    id: 5,
    name: "Jewel 5",
    price: "00.00",
    image: "https://i.postimg.cc/VNQyp39W/p7s.jpg",
    description: "something",
  },
  {
    id: 6,
    name: "Jewel 6",
    price: "00.00",
    image: "https://i.postimg.cc/TwdsXGKg/p3s.jpg",
    description: "something",
  },
  {
    id: 7,
    name: "Jewel 7",
    price: "00.00",
    image: "https://i.postimg.cc/4dWSfMcM/p6s.jpg",
    description: "something",
  },
  {
    id: 8,
    name: "Jewel 8",
    price: "00.00",
    image: "https://i.postimg.cc/2y2rf2j8/p2s.jpg",
    description: "something",
  },
  {
    id: 9,
    name: "Jewel 9",
    price: "00.00",
    image: "https://i.postimg.cc/BZgqDQ59/p5s.jpg",
    description: "something",
  },
];

localStorage.setItem("products", JSON.stringify(myProducts));
let Information = JSON.parse(localStorage.getItem("products"));
console.log(Information);

// show image
document.querySelector("#productList");

productList.innerHTML = "";
myProducts.forEach((prod) => {
  productList.innerHTML += `
      <div class="col">
        <div class="card h-100 border border-black shadow">
          <img src="${prod.image}" class="card-img-top" alt="product" loading="lazy" id="pics">
          <div class="card-body">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">${prod.description} <br> ${prod.price}</p>
          </div>
          <div class="card-footer">
           <button type="button" class="adbtn border border-black shadow">+ A D D</button>
           <button type="button" class="vbtn border border-black shadow" data-bs-toggle="modal" data-bs-target="#exampleModal`+ prod.id +`">
             V I E W
           </button>
           <div class="modal fade" id="exampleModal` + prod.id +`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.name}</h1>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <img src="${prod.image}" class="card-img-top" alt="product" loading="lazy" id="pics">
               ${prod.description}
               </div>
               <div class="modal-footer">
               ${prod.price}
               </div>
             </div>
           </div>
         </div>
          </div>
        </div>
      </div>
      `;
});

console.log(localStorage.getItem("products"));
