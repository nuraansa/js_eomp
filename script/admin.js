let table = document.querySelector(".main");
let details = [
    {
        id: 1,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
      {
        id: 2,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
      {
        id: 3,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
      {
        id: 4,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
      {
        id: 5,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
      {
        id: 6,
        name: "Jewel",
        price: "R 00.00",
        image: "https://i.postimg.cc/y84kgP3d/Screenshot-2023-06-12-150036.png",
        description: "something",
      },
];
details.forEach((data) => {
  table.innerHTML += `
    <div class="container-fluid">
        <tr class="border border-black">
        <td><img src='${data.image}' style="width:150px"></td>
        <td>${data.name}</td>
        <td>${data.description}</td>
        <td>${data.price}</td>
        <td><button><i class="edi bi bi-pencil-square"></i></button></td>
        <td><button><i class="add bi bi-trash"></i></button></td>
        </tr> 
    </div>`;
});
