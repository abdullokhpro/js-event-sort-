let CARS = [
  {
    id: "N1",
    title: "Tesla Model X",
    brand: "Tesla",
    price: "100 000",
    color: "black",
    hp: 100,
  },

  {
    id: "N2",
    title: "BMW 2100",
    brand: "bmw",
    price: "120 000",
    color: "white",
    hp: 250,
  },

  {
    id: "N3",
    title: "Supra 5th Edition",
    brand: "Supra",
    price: "300 000",
    color: "pink",
    hp: 300,
  },
];

const tableBody = document.querySelector(".table__body");
const sortingPrice = document.querySelector(".table__heading__select");
let count = 0;

sortingPrice.addEventListener("change", (e) => {
  let value = e.target.value;
  if (value === "descending") {
    CARS.sort((a, b) => b.price - a.price);
    createTableData(CARS);
  }
});

function createTableData(data) {
  while (tableBody.firstChild) {
    tableBody.firstChild.remove;
  }

  data.forEach((value, index) => {
    let tableRow = document.createElement("tr");
    tableRow.className = "tabel__row";

    count++;
    tableRow.innerHTML = `
                <td class="table__data">${count}</td>
                <td class="table__data">${value.title}</td>
                <td class="table__data">${value.brand}</td>
                <td class="table__data">${value.price}</td>
                <td class="table__data">${value.color}</td>
                <td class="table__data">${value.hp}</td>
    `;

    tableBody.appendChild(tableRow);
  });
}

createTableData(CARS);
