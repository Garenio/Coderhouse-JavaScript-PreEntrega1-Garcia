function home() {
   
    option = prompt("Bienvenido al juego de toma de decisiones.\n- Si tienes una cuenta escribe 'Entrar'.\n- Si quieres crear una cuenta escribe 'Crear'.\n- Para salir escribe 'Salir'.")

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
        case "Salir":
            break;
        case "SALIR":
            break;
        default:
          alert("Elija una opción válida.")
          home()
    }
}

let user;
let password;

function createAccount() {
    user = prompt("Cree su nombre de usuario: ")
    password = prompt("Cree su contraseña: ")
    alert("Su cuenta fue creada correctamente")
    return home()
}

function login() {
    entryUser = prompt("Ingrese su usuario: ")
    entryPassword = prompt("Ingrese su password: ")

    if (entryUser === user && entryPassword === password && entryUser != "" && entryPassword != "") {
        alert("Bienvenido/a " + user)
        return chapter1()
    }

    alert("Las credenciales son inválidas")
    return home()

}

function chapter1 (){
    pickCap1 = prompt(
        "Te despiertas en un lugar oscuro y frio. Cuando ya ves todo más claro te das cuenta de que estás encerrado en una celda.\nFinalmente el grupo terrorista logró dar contigo.\nVes que el guardia está dormido bastante cerca de la celda y las llaves cuelgan de su cinturón.\n\n¿Qué intentarás hacer?\nA - Intento quitarle las llaves.\nB - Grito pidiendo ayuda.\n\n(Escribe sólo la letra de la opción que quieres elegir)"
        )

    switch (pickCap1) {
        case "A":
            gameOver()
            break;
        case "a":
            gameOver()
            break;
        case "B":
            chapter2()
            break;
        case "b":
            chapter2()
            break;
        default:
          alert("Elija una opción válida.")
          chapter1()
    }
}

function chapter2 (){

    alert("Al gritar el guardia se levanta de un salto y exclama: me quedé dormido! Mi jefe me matará!. Luego de decir eso sale corriendo y las llaves caen al suelo. Al quedar la sala libre te estiras y alcanzas las llaves. \nAhoras estas fuera de la celda y te encuentras en una sala cerrada con una única puerta de acceso. El guardia al salir la dejó cerrada. Al intentar abrir la puerta te das cuenta que está trabada. Y ves una pantalla donde puedes escribir un código de 3 dígitos...")

    pickCap2 = parseInt(prompt("En el teclado observas que los números 0, 5 y 8 están más gastados que los demás. Tienes solo 3 intentos..."))
    
    let code = 805
    let codeTry = 1;

    while (codeTry < 3) {
        if (pickCap2 != code) {
            pickCap2 = parseInt(prompt("Código incorrecto. Te quedan " + (3 - codeTry) + " intentos."))
            codeTry = (codeTry + 1)
        }
        else {
            alert("Código correcto. Puerta desbloqueada")
            return chapter3()
        }
    }

    alert("Has agotado las posibilidades. De repente empieza a sonar una fuerte alarma y eres detenido nuevamente.")
    return gameOver()
}

function chapter3(){
    alert("Has logrado escapar ¡Eres libre!\n\nGracias por jugar. Vuelve pronto.")
    return home()
}

function gameOver() {
    alert("Has sido descubierto y no lograste escapar ¡Sigue intentándolo!")
    return home()
}

home()
