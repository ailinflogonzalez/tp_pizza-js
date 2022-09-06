let pizzas = [{
  id: 1,
  nombre: 'Especial',
  ingrendientes: ['Pimenton', 'Jamon', 'Muzzarella'],
  precio: 1200,
},
{
  id: 2,
  nombre: 'Fugazzeta',
  ingrendientes: ['Cebolla', 'Aceituna'],
  precio: 1000,
},
{
  id: 3,
  nombre: 'Anana',
  ingrendientes: ['Anana', 'Jamon'],
  precio: 1300,
},
{
  id: 4,
  nombre: 'Americano',
  ingrendientes: ['Huevo frito', 'Bacon'],
  precio: 1250,
},
{
  id: 5,
  nombre: 'Rucula',
  ingrendientes: ['Rucula', 'Roquefort'],
  precio: 1200,
},
{
  id: 6,
  nombre: 'Pollo',
  ingrendientes: ['Pollo', 'Queso'],
  precio: 1300,
}
]

//a) Las pizzas que tengan un id impar.
pizzas.forEach(impar => {
  if (impar.id % 2 !== 0) {
    console.log(`Esta pizza tiene el id impar: ${impar.nombre}.`);
    //document.write(`Esta pizza tiene el id impar: ${impar.nombre}.<br>`);
  }
});


// b) ¿Hay alguna pizza que valga menos de $600?
if (pizzas.some(menos600 => menos600.precio > 600)) {
  console.log("No hay pizzas que valgan menos de 600pe");
  //document.write("No hay pizzas que valgan menos de 600pe.<br>");
};


//c) Los nombres de todos las pizzas.
pizzas.forEach(listaDeNombres => {
  console.log(`Tenemos para ofrecerte pizza ${listaDeNombres.nombre}`);
  //document.write(`Tenemos para ofrecerte pizza ${listaDeNombres.nombre}<br>`);
});


//d) Los precios de las pizzas.
pizzas.forEach(listaDePrecio => {
  console.log(`La pizza ${listaDePrecio.nombre} tiene un valor de ${listaDePrecio.precio} pesos`);
  //document.write(`La pizza ${listaDePrecio.nombre} tiene un valor de ${listaDePrecio.precio} pesos<br>`);
});


//e) El nombre de cada pizza con su respectivo precio.
pizzas.forEach(otraListaDePrecios => {
  console.log(`${otraListaDePrecios.nombre}: $${otraListaDePrecios.precio} pesos`);
  //document.write(`${otraListaDePrecios.nombre}: $${otraListaDePrecios.precio} pesos<br>`);
});

//-------------------------------------------------------------------------------------------------------

const getValueInput = () => {
  const nombreDePizza = document.getElementById("select-pizza").value;
  document.getElementById("nombrePizza").innerHTML = nombreDePizza;
  //  return nombreDePizza;
  const precioDePizza = document.getElementById("select-pizza").value;
  document.getElementById("precioPizza").innerHTML = precioDePizza;
  //  return precioDePizza;
  document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault();
  });
}





