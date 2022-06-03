// Array
const helados = [
    
    { nombre: 'Bombón helado de marca Heladix', precio: 1.7, valoracion: 4, abreviacion: 'heladix'},
    { nombre: 'Bombón helado de marca Heladovich', precio: 1.8, valoracion: 3, abreviacion: 'heladovich'},
    { nombre: 'Bombón helado de marca Helardo', precio: 1.5, valoracion: 2, abreviacion: 'helard'},
    { nombre: 'Palito de helado Artika', precio: 0.8, valoracio: 1, abreviacion: 'artika'},
    { nombre: 'Palito de helado de agua', precio: 0.6, valoracion: 2, abreviacion: 'agua'},
    { nombre: 'Palito de helado de crema', precio: 1, valoracion: 3, abreviacion: 'crema'},
    { nombre: 'Potecito de helado de confites', precio: 2.9, valoracion: 5, abreviacion: 'confites'},
]



// Nombre usuario
const nombreUsuario= prompt('Bienvenido a Heladeria Venezia. Escriba su primer nombre')
alert(`Bienvenido ${nombreUsuario}. En la parte de "Consola" le mostraremos nuestra carta`)

// Lista de helados
console.log('LISTA DE HELADOS:')
helados.forEach((helado) => {
    console.log(`${helado.nombre} ......... $${helado.precio}`)
})

// Orden por precio
let ordenarlos='si'
while (ordenarlos=='si') {
    const heladosFiltrados = prompt('¿Desea ordenarlos de menor a mayor precio?')
    switch (heladosFiltrados) {
        case 'si':
            console.log('')
            console.log('Helados del mas barato al mas caro:')

            // Ordenar lista de helados
            helados.sort((a,b) => {
                if (a.precio > b.precio) {
                    return 1;
                }
                if (a.precio < b.precio) {
                    return -1;
                }
                return 0;
            })

            // Lista de helados del barato al caro
            helados.forEach((helado) => {
                console.log(`${helado.nombre} ......... $${helado.precio}`)
            })

            ordenarlos='no'

        case 'no':
            ordenarlos='no'
            break;

        default:
            alert('Escribió un termino no valido. Vuelva a intentarlo')
    }
}


console.log('')
console.log('LISTA DE COMPRAS')

// Lista de compras
const carrito = []

// Funcion helado comprado
const heladoComprado = (helados) => {
    console.log(`${helados.nombre} ......... $${helados.precio}`)
}

// Precio total
const totalCarrito = () => {
    let sumaTotal = 0
    carrito.forEach((helado) => {
        sumaTotal += helado.precio
    }
    )
    return sumaTotal
}

// Elije el helado
const listaHelados = () => {
    const heladoElegido = prompt('Elije un helado: Heladix, Heladovich, Helardo, Artika, Agua, Crema, Confites').toLowerCase()

    //* SWITCH: Para cosas puntuales
    switch (heladoElegido) {
    case 'heladix':
        const resultadoFind1 = helados.find((helado) => helado.abreviacion == 'heladix')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind1)
        break;  
    case 'heladovich':
        const resultadoFind2 = helados.find((helado) => helado.abreviacion == 'heladovich')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind2)
        break; 
    case 'helardo':
        const resultadoFind3 = helados.find((helado) => helado.abreviacion == 'helardo')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind3)
        break;
    case 'artika':
        const resultadoFind4 = helados.find((helado) => helado.abreviacion == 'artika')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind4)
        break;
    case 'agua':
        const resultadoFind5 = helados.find((helado) => helado.abreviacion == 'agua')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind5)
        break;  
    case 'crema':
        const resultadoFind6 = helados.find((helado) => helado.abreviacion == 'crema')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind6)
        break;
    case 'confites':
        const resultadoFind7 = helados.find((helado) => helado.abreviacion == 'confites')
        console.log(`${helados.nombre} ......... $${helados.precio}`)
        carrito.push(resultadoFind7)
        break;   
    default :
        console.log('Por favor, ingrese un dato correcto');
        break;
    }

    //* Continuar o finalizar
    if (confirm('Desea agregar otro producto?')) {
        listaHelados()
    }
    else {
        console.log(`Finalizo compra, su total a pagar es S/.${totalCarrito()}`)
        console.log(carrito)
    }
}

listaHelados()