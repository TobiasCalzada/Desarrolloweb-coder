//primer script : pagina de venta,sobre mates.

alert("Bienvenidos a TCA muebles")


// datos de los productos 

function Mates(nombre,precio,stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.restarElStock = function(cantidad){
        this.stock -= cantidad
    }
}

//objetos a partir de funcion constructora
let mateImperialObjeto = new Mates("Mate imperial",200,100)
let mateMetalObjeto = new Mates("Mate de Metal",100,200)
let mateTorpedoObjeto = new Mates("Mate estilo torpedo",150,350)


let precioTotal = 0


alert("Estos son nuestros productos :" + "\n" + "Mate Imperial" + "\n" + "Mate de Metal" + "\n" + "Mate Torpedo")

function CalculoDePrecio(cantidad,precio){
    precioTotal += (cantidad * precio)
}

function CalculoDelStock(cantidad,stock,precio){
    if(cantidad <= stock){
        CalculoDePrecio(cantidad,precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades del producto a comprar.")
    }
}

let cantidadDeCompraProductos = prompt("Inserte que cantidad de productos distintos quiere comprar : ")

//estructura compra for
for(let i =  0; i < cantidadDeCompraProductos; i = i + 1){

    let productosCompra = prompt("Ingrese que producto quiere comprar: \n - Mate Imperial \n - Mate de Metal \n - Mate Torpedo")

    if (productosCompra.toLowerCase ()== "mate imperial"){
        let cantidadDeMateImperial = prompt("Ingrese la cantidad de " + mateImperialObjeto.nombre + " " + "que desea comprar :")
        CalculoDelStock(cantidadDeMateImperial,mateImperialObjeto.stock,mateImperialObjeto.precio)
        mateImperialObjeto.restarElStock(cantidadDeMateImperial)
    }
    else if(productosCompra.toLowerCase ()== "mate de metal"){
        let cantidadDeMateMetal = prompt("Ingrese la cantidad de " + mateMetalObjeto.nombre + " " + " que desea comprar :")
        CalculoDelStock(cantidadDeMateMetal,mateMetalObjeto.stock,mateMetalObjeto.precio)
        mateMetalObjeto.restarElStock(cantidadDeMateMetal)
    }
    else if(productosCompra.toLowerCase ()== "mate torpedo"){
        let cantidadDeMateTorpedo = prompt("Ingrese la cantidad de " + mateTorpedoObjeto.nombre  + " " + " que desea comprar :")
        CalculoDelStock(cantidadDeMateTorpedo,mateTorpedoObjeto.stock,mateTorpedoObjeto.precio)
        mateTorpedoObjeto.restarElStock(cantidadDeMateTorpedo)
    }
    else{
        alert("No disponemos de ese producto")
    }
}

//precio total de lo generado en el for
alert("El precio total es de : " + precioTotal)


//arrays con objetos
//bommbillaas

const bombilla = [ 
    {nombre:"Bombilla 1",tipo:"filtro de coco",precio:500,},
    
    {nombre:"Bombilla 2",tipo:"filtro pico de loro",precio:900,},

    {nombre:"Bombilla 3",tipo:"filtro de resorte",precio:200,},

    {nombre:"Bombilla 4",tipo:"bombilla de cobre",precio:500,},

    {nombre:"Bombilla 5",tipo:"bombilla estandar",precio:1000,},

    {nombre:"Bombilla 6",tipo:"filtro de madera",precio:100,},

    {nombre:"Bombilla 7",tipo:"bombilla premiun",precio:2000,},
];

//resulttados del find
const resultado = bombilla.find((x) => x.precio === 500)
const resultado2 = bombilla.find((x) => x.precio <= 900)

//map
const bombillaNombres = bombilla.map((z) => z.nombre)

//resultados filter
const resultado3 = bombilla.find((y) => y.tipo.includes === "bombilla")
const resultado4 = bombilla.find((y) => y.precio < 500)

//console log find
console.log(resultado)
console.log(resultado2)

//console log map
console.log(bombillaNombres)

//console log filter
console.log(resultado3)
console.log(resultado4)

















