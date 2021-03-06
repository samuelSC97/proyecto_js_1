// Array
const helados = [
    
    { nombre: 'Bombón helado de marca Heladix', precio: 1.7, valoracion: 4, abreviacion: 'heladix'},
    { nombre: 'Bombón helado de marca Heladovich', precio: 1.8, valoracion: 3, abreviacion: 'heladovich'},
    { nombre: 'Bombón helado de marca Helardo', precio: 1.5, valoracion: 2, abreviacion: 'helard'},
    { nombre: 'Palito de helado Artika', precio: 0.8, valoracion: 1, abreviacion: 'artika'},
    { nombre: 'Palito de helado de agua', precio: 0.6, valoracion: 2, abreviacion: 'agua'},
    { nombre: 'Palito de helado de crema', precio: 1.0, valoracion: 3, abreviacion: 'crema'},
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
    const heladosOrdenados = prompt('¿Desea ordenarlos de menor a mayor precio? Si/No')
    switch (heladosOrdenados) {
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
            break;

        case 'no':
            ordenarlos='no'
            break;

        default:
            alert('Escribió un termino no valido. Vuelva a intentarlo')
            ordenarlos='si'
            break;
    }
}

// Recomendar valoracion
let mostrarValoracion='si'
while (mostrarValoracion=='si') {
    const heladosRecomendados = prompt('¿Desea una lista de los mas recomendados? Si/No')
    switch (heladosRecomendados) {
        case 'si':
            console.log('')
            console.log('Helados del mas recomendado al menos recomendado:')

            // Ordenar lista de helados
            helados.sort((a,b) => {
                if (a.valoracion < b.valoracion) {
                    return 1;
                }
                if (a.valoracion > b.valoracion) {
                    return -1;
                }
                return 0;
            })

            // Lista de helados del barato al caro
            helados.forEach((helado) => {
                console.log(`${helado.nombre} ......... ${helado.valoracion} estrellas`)
            })

            mostrarValoracion='no'
            break;

        case 'no':
            mostrarValoracion='no'
            break;

        default:
            alert('Escribió un termino no valido. Vuelva a intentarlo')
            break;
    }
}


console.log('')
console.log('LISTA DE COMPRAS')

// Lista de compras
const carrito = []

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

    // Funcion helado comprado
    const heladoComprado = (resultadoFind) => {
        console.log(`${resultadoFind.nombre} ....... $${resultadoFind.precio}`)
    }

    // SWITCH: Para cosas puntuales
    switch (heladoElegido) {
    case 'heladix':
        const resultadoFind1 = helados.find((helado) => helado.abreviacion == 'heladix')
        heladoComprado (resultadoFind1)
        carrito.push(resultadoFind1)
        break;  
    case 'heladovich':
        const resultadoFind2 = helados.find((helado) => helado.abreviacion == 'heladovich')
        heladoComprado (resultadoFind2)
        carrito.push(resultadoFind2)
        break;  
    case 'helardo':
        const resultadoFind3 = helados.find((helado) => helado.abreviacion == 'helardo')
        heladoComprado (resultadoFind3)
        carrito.push(resultadoFind3)
        break;  
    case 'artika':
        const resultadoFind4 = helados.find((helado) => helado.abreviacion == 'artika')
        heladoComprado (resultadoFind4)
        carrito.push(resultadoFind4)
        break;  
    case 'agua':
        const resultadoFind5 = helados.find((helado) => helado.abreviacion == 'agua')
        heladoComprado (resultadoFind5)
        carrito.push(resultadoFind5)
        break;  
    case 'crema':
        const resultadoFind6 = helados.find((helado) => helado.abreviacion == 'crema')
        heladoComprado (resultadoFind6)
        carrito.push(resultadoFind6)
        break;  
    case 'confites':
        const resultadoFind7 = helados.find((helado) => helado.abreviacion == 'confites')
        heladoComprado (resultadoFind7)
        carrito.push(resultadoFind7)
        break;  
    default :
        alert('Por favor, ingrese un dato correcto');
        break;
    }

    //* Continuar o finalizar
    if (confirm('Desea agregar otro producto?')) {
        listaHelados()
    }
    else {
        console.log('')
        console.log(`Finalizo su compra de helados, su total a pagar es S/.${totalCarrito()}`)
        console.log(carrito)
    }
}

listaHelados()