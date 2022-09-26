//primer script : pagina de venta,sobre mates.

alert("Bienvenidos a TCA muebles")


// datos de los productos 
let mateImperial="Mate imperial"
let precioImperial=200

let mateMetal="Mate de Metal"
let precioMetal=100

let mateTorpedo="Mate estilo torpedo"
let precioTorpedo=150

let precioTotal = 0


alert("Estos son nuestros productos :" + "\n" + "Mate Imperial" + "\n" + "Mate de Metal" + "\n" + "Mate Torpedo")

let cantidadDeCompraProductos = prompt("Inserte que cantidad de productos distintos quiere comprar : ")

//estructura compra for
for(let i =  0; i < cantidadDeCompraProductos; i = i + 1){

    let productosCompra = prompt("Ingrese que producto quiere comprar: \n - Mate Imperial \n - Mate de Metal \n - Mate Torpedo")

    if (productosCompra.toLowerCase ()== "mate imperial"){
        let cantidadDeMateImperial = prompt("Ingrese la cantidad de " + mateImperial + " " + "que desea comprar :")
        precioTotal = precioTotal + (cantidadDeMateImperial * precioImperial)
    }
    else if(productosCompra.toLowerCase ()== "mate de metal"){
        let cantidadDeMateMetal = prompt("Ingrese la cantidad de " + mateMetal + " " + " que desea comprar :")
        precioTotal = precioTotal + (cantidadDeMateMetal * precioMetal)
    }
    else if(productosCompra.toLowerCase ()== "mate torpedo"){
        let cantidadDeMateTorpedo = prompt("Ingrese la cantidad de " + mateTorpedo + " " + " que desea comprar :")
        precioTotal = precioTotal +  (cantidadDeMateTorpedo * precioTorpedo)
    }
    else{
        alert("No disponemos de ese producto")
    }
}

//precio total de lo generado en el for
alert("El precio total es de : " + precioTotal)


function descuentos(precioTotal){
    switch(precioTotal){
        case precioTotal == 0:
            return  descuentos=("Su compra no aplica para un descuento");

        case precioTotal <= 500:
            return  descuentos=("Su compra no aplica para un descuento");

        case precioTotal <= 1000:
            return  descuentos=("a su compra se le aplicara un descuento del 10%");

        case precioTotal <= 1500:
            return  descuentos=("a su compra se le aplicara un descuento del 16%");

        case precioTotal <= 2000:
            return  descuentos=("a su compra se le aplicara un descuento del 20%");

        default:
            return descuentos=("a su compra se le aplicara un descuento del 3%");
    }
}

alert (descuentos("el descuento aplicado a su compra es de :" + precioTotal))















