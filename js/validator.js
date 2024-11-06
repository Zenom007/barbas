validateName()
// validateRequired()
validateEmail()
validateTel()

function validateName() {
    const element = document.querySelector("#nameInput")
    const message = document.querySelector("#nameHelp")
    element.addEventListener('blur', (e) => {
        const value = e.target.value
        console.log(value)
        let content = ''
        if (value == '') {
            content = '<span class="text-danger"> Nome invalido ou embranco </span>'
            //message.innerHTML = '<span class="text-danger"> Nome invalido ou embranco </span>'
        }
        message.innerHTML = content
        // else {
        //     message.innerHTML = ''
        // }
    })
}

function validateEmail() {
    const element = document.querySelector("#emailInput")
    const message = document.querySelector("#emailHelp")
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        console.log(value)
        let error = ''
        //if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
        const regexEmail = (/^[a-z0-9]+\@[a-z]+\.([a-z]{3})+$/g)
        if (!regexEmail.ma(value)) {
            error = "E-mail invalido"
        }
        message.innerHTML = error
    })
}

// //Função para pegar os elementos
// function getElement(elementSelector) {
//     return document.querySelector(elementSelector)
// }
// //Função para preenche do conteudo do elemento
// function setContentElement(elementSelector, content) {
//     const element = getElement(elementSelector)
//     if (element) {
//         element.innerHTML = content
//     }
// }


function validateTel() {
    //const element = getElement("#telInput")
    const element = document.querySelector("#telInput")
    const message = document.querySelector("#telHelp")
    element.setAttribute('maxlength', '15')
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        const regexTel = /^\([0-9]{2,3}\)\s[0-9]{5}-[0-9]{4}$/g
        let error = ""
        if (!regexTel.test(value)) {
            error = 'Telefone invalido. Formato: "(999) 99999-9999"'
        }
        message.innerHTML = error
        //setContentElement("#telHelp", error)
    })
}





function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    console.log(elements)
    //const message = document.querySelector("#nameHelp")
} 