let url = "https://private-21e8de-rafaellucio.apiary-mock.com/users";

function init() {
  fetch(url).then(r => r.json())
  .then(data => 
    // console.log(data)
    data.forEach(item => {
      createElement(item)
    })
  )
  .catch(e => 
    console.log("Deu ruim")
  );
}

function createElement(data) {
  let boxList = document.querySelector('.box-list-itens');
  let item = document.createElement('li');
  let id = document.createElement('span')
  let name = document.createElement('span');
  item.appendChild(id);
  item.appendChild(name);
  item.classList.add('item');
  id.classList.add('id');
  id.innerText = data.cpf;
  name.classList.add('name');
  name.innerText = data.name;
  boxList.appendChild(item);
}

window.addEventListener('load', function() {
  init();
})
