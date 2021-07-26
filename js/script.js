const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    name,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>loading</p>`

  let pronto = `<p>finished</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})


const carrito = document.querySelectorAll('.btn');
carrito.forEach((addCarrito) => {
  addCarrito.addEventListener('click', addCarritoClick);
});

function addCarritoClick(event) {
  const button = event.target;
  const funko = button.closest('.left-column');

  const cardTitle = funko.querySelector('.title').textContent;
  const cardPrice = funko.querySelector('.precio').textContent;
  
  
  localStorage.setItem('produto', cardTitle + " " + cardPrice);
  
}



