let url = "https://jsonplaceholder.typicode.com/users";
let data = "";

function init() {
  fetch(url).then(r => r.json())
  .then(data => {
    createElement(data);
  })
  .catch(e => {
    console.log("Deu ruim");
  });
}

function createElement(data) {
  let boxList = document.querySelector('.box-list-itens');
  let title = `
    <strong class="title column">Name</strong>
    <strong class="title column">Website</strong>
    <strong class="title column">Email</strong>
    <strong class="title column">Phone</strong>`;
  let title_item = document.createElement('li');
  title_item.classList.add('title_item');
  title_item.innerHTML = title;
  boxList.appendChild(title_item);
  data.forEach((item, i) => {
    let item_list = document.createElement('li');
    item_list.classList.add('item')
    let el = `
    <p class="column">
      <span class="name">${item.name}</span>
    </p>
    <p class="column">
      <span class="website"><a href="${item.website}">${item.website}</a></span>
    </p>
    <p class="column">
      <span class="email">${item.email}</span>
    </p>
    <p class="column">
      <span class="phone">${item.phone}</span>
    </p>`;
    item_list.innerHTML = el;
    boxList.appendChild(item_list);
  })
}

window.addEventListener('load', function() {
  init();
})
