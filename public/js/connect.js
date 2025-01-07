let connect = document.getElementById("connect")
let sign = document.getElementById("sign")
let signConnect = document.getElementById("signConnect")

function connectBtn () {
    sign.style.display = "none"
    connect.style.display = "block"
    signConnect.style.display = "none"
}

function signBtn () {
    connect.style.display = "none"
    sign.style.display = "block"
    signConnect.style.display = "none"
}

let myForm = document.getElementById("myForm")

myForm.addEventListener("submit", function(e) {
    e.preventDefault()

    let myConfirmPassword = document.getElementById("confirmPassword")
    let myPassword = document.getElementById("password")
    let myEmail = document.getElementById("email")
    let mySurname = document.getElementById("surname")
    let myName = document.getElementById("name")
    
    let myError = document.getElementById("error")

    if (myConfirmPassword.value != myPassword.value) {
        myError.innerHTML = "Le mot de passe n'est pas identique"
        myError.style.color = 'red'
    } 

    if (myConfirmPassword.value = "" ) {
        myError.innerHTML = "Le champ mot de passe est requis"
        myError.style.color = "red"
    }

    if (myPassword.length < 8) {
        myError.innerHTML = "Le mot de passe doit contenir 8 caractères ou plus"
        myError.style.color = "red"
    } 

    if (myEmail.value.trim() == "") {
        myError.innerHTML = "Le mail est obligatoire"
        myError.style.color = "red"
    } else if (myEmail = !includes("@")) {
        myError.innerHTML = "Le champ doit contenir un '@'"
        myError.style.color = "red"
    }

    if (mySurname.value.trim() == "") {
        myError.innerHTML = "Le nom est obligatoire"
        myError.style.color = "red"
    }

    if (myName.value.trim() == "") {
        myError.innerHTML = "Le prénom est obligatoire"
        myError.style.color = "red"
    } else {
        myError.display.none
    }
})