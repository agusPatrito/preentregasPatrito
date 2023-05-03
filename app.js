///creacion de usuario
let nombreUsuario = prompt("Cree su nombre de usuario: ");
let contraseñaUsuario = prompt("Cree su contraseña: ");
let nombreIngreso;
let contraseñaIngreso;
const cartelera = [];
console.log('Array cartelera creado', cartelera);

while((nombreUsuario || contraseñaUsuario) == "") {
    nombreUsuario = prompt("Ingrese algun valor de nombre de usuario: ");
    contraseñaUsuario = prompt("Ingrese algun valor de contraseña: ");
}

alert("Bienvenido al sistema!!!");

///ingreso al sistema
let ingreso = prompt("Quiere ingresar al sistema?(S/N)");

if(ingreso == "S") {
    nombreIngreso = prompt("Ingrese el usuario: ");
    if (nombreIngreso != nombreUsuario) {
        alert("Usuario incorrecto");
    } else {
        contraseñaIngreso = prompt("Ingrese la contraseña: ");
        if(contraseñaIngreso != contraseñaUsuario) {
            alert("Contraseña incorrecta");
        } else {
            alert("INGRESO ACEPTADO...");
            validado = true;
        }
    }
}

function validarN() {
    let n = parseInt(prompt('Ingrese una opcion: '),10);
    while (isNaN(n) || n > 3 || n < 0) {
        n = parseInt(prompt('INGRESE UNA OPCION CORRECTA: '),10);
    } 
    return n;
}

 
if(validado) {
    alert('1-Agregar Pelicula \
        2-Buscar Pelicula Por Nombre');
    n = validarN()
    while(n != 0) {
        if(n == 1) {
            let titulo = prompt('Ingrese el titulo de la pelicula que quiere agregar: ');
            let año = prompt('Ingrese el año: ');
            let duracion = prompt('Ingrese la duracion: ');
            let director = prompt('Ingrese el director: ');
            let rating = prompt('Ingrese el rating: ');
        
            const nuevaPelicula = new Pelicula(titulo, año, duracion, director, rating);
            cartelera.push(nuevaPelicula);
            n = validarN()

        }else if(n==2 && cartelera.length > 0){
            let nombrePelicula = prompt('Ingrese el nombre de la pelicula: ');
            const buscarNombre = cartelera.filter((pelicula) => pelicula.titulo === nombrePelicula);
            buscarNombre.forEach((pelicula) => console.log(pelicula));
            n = validarN();
            
        }else {
            alert('Ingrese primero datos a la cartelera!!!');
            alert('1-Agregar Pelicula \
            2-Buscar Pelicula Por Nombre');
            n = validarN();

        }

        
        
    }
    }

    





