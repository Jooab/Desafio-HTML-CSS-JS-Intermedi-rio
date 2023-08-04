let inputs = document.querySelectorAll('input')
let formulario = document.querySelector('form')
let avisos = document.querySelectorAll('p')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    inputs.forEach(function (input) {
        if (input.value !== "") {
            input.style.borderColor = "#00C22B"
        } else if (input.value === "") {
            input.style.borderColor = '#F52E2E'
            avisos.forEach(function (aviso) {
                aviso.classList.remove('opacidade')
            })
        }
    })
})


