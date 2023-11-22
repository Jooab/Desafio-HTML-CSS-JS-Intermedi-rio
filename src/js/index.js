let inputs = document.querySelectorAll('.input')
let formulario = document.querySelector('form')
let avisos = document.querySelectorAll('p')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    inputs.forEach(function (input) {
        if (input.value !== "") {
            input.classList.add('borda-verde')
            input.classList.remove('borda-vermelha')
            input.nextElementSibling.classList.add('opacidade')
        } else if (input.value === "") {
            input.classList.add('borda-vermelha')
            input.nextElementSibling.classList.remove('opacidade')
        }
    })
})


