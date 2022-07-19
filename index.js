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

/*a) Las pizzas que tengan un id impar.*/
pizzas.forEach(impar => {
  if (impar.id % 2 != 0) {
    console.log(`Esta pizza tiene el id impar: ${impar.nombre}.`);
    document.write(`Esta pizza tiene el id impar: ${impar.nombre}.<br>`);
  }
});


/* b) ¿Hay alguna pizza que valga menos de $600 ? */
pizzas.forEach(menor600 =>{
  if (menor600.precio <= 600){
    console.log(`Estas pizzas valen menos de 600pe: ${menor600.nombre}`)
    document.write(`Estas pizzas valen menos de 600pe: ${menor600.nombre}<br>`)
  } else {
    console.log(`Ninguna pizza vale menos de 600pe :(`);
    //intente ponerlo en un document.write pero aparecia 6 veces el mismo msj
    //y al parecer no puedo utilizar un break(?)
  }
})


/* c) Los nombres de todos las pizzas. */
pizzas.find(nombre => {
  console.log(`Tenemos pizzas ${nombre.nombre}.`);
  document.write(`Tenemos pizzas ${nombre.nombre}.<br>`);
});


/* d) Los precios de las pizzas. */
pizzas.find(precio =>{
  console.log(`${precio.nombre}: ${precio.precio}`)
  document.write(`${precio.nombre}: ${precio.precio}.<br>`)
})


/* e) El nombre de cada pizza con su respectivo precio. */
pizzas.find(valor => {
  console.log(`La ${valor.nombre} vale ${valor.precio}.`);
  document.write(`La ${valor.nombre} vale ${valor.precio}.<br>`);
});

