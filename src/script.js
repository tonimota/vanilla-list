let url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";
let data = "";

function init() {
  fetch(url).then(r => r.json())
  .then(data => {
      createElement(data)
  })
  .catch(e => {
    console.log("Deu ruim")
  });
}

function createElement(data) {
  let boxList = document.querySelector('.box-list-itens');
  data.forEach(item => {
    let item_list = document.createElement('li');
    let el = `<span class="cpf">${item.cpf}</span><span class="name">${item.name}</span><span class="email">${item.email}</span>`;
    item_list.innerHTML = el
    boxList.appendChild(item_list);
  })
}

window.addEventListener('load', function() {
  init();
})
