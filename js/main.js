/*

function iniciar() {
    let nombreJugador = ""
    do {
        nombreJugador = prompt("Ingrese su nombre para iniciar: ")
    }while(nombreJugador === "")

    return alert("Bienvenido/a " + nombreJugador + ". Para comenzar el juego presiona el botón de aceptar.")
}

alert("Bienvenido al juego de toma de decisiones. Sólo una única combinación de respuestas hará que ganes el juego. ¡Mucha Suerte!");
iniciar();

*/

function home() {
   
    option = prompt("Bienvenido al juego de toma de decisiones./aSi tienes una cuenta escribe 'Entrar'. Si quieres crear una cuenta escribe 'Crear'")

    switch (option) {
        case "Entrar":
            login()
            break;
        case "ENTRAR":
            login()
            break;
        case "Crear":
            createAccount()
            break;
        case "CREAR":
            createAccount()
            break;
        default:
          alert("Elija una opción válida.")
          home()
    }
}

let user = "";
let password = "";

function createAccount() {
    user = prompt("Cree su nombre de usuario: ")
    password = prompt("Cree su contraseña: ")

    return home()
}

function login() {
    entryUser = prompt("Ingrese su usuario: ")
    entryPassword = prompt("Ingrese su password: ")

    if (entryUser === user && entryPassword === password && entryUser != "" && entryPassword != "") {
        return(alert("Bienvenido/a " + user))
    }

    alert("Las credenciales son inválidas")
    return home()

}