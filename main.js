// MODO OSCURO-CLARO //
const btnLight = document.getElementById('btnLight')
const body = document.querySelector('body')

btnLight.addEventListener('click', () =>{
    body.classList.toggle("light-mode")
    if(btnLight.innerHTML === "Modo oscuro"){
        btnLight.innerHTML = "Modo claro"
    } else {
        btnLight.innerHTML = "Modo oscuro"
    }

})

// MEME //
const memeBox = document.getElementById('memeBox')
const inputUrl = document.getElementById('inputUrl')

inputUrl.addEventListener('input', (e) => {
    const urlIngresada = e.target.value;
    memeBox.style.background = `url("${urlIngresada}")`
    memeBox.style.backgroundSize = `cover`
})


// ASIDE //
const btnImage = document.getElementById('btnImage')
const btnText = document.getElementById('btnText')
const panelImage = document.getElementById('panel-image')
const panelText = document.getElementById('panel-text')

btnImage.addEventListener('click', () => {
    panelImage.classList.remove('d-none')
    panelText.classList.add('d-none')
})

btnText.addEventListener('click', () => {
    panelText.classList.remove('d-none')
    panelImage.classList.add('d-none')
})


// CHECKBOX //
const topInput = document.getElementById('topInput')
const topText = document.getElementById('topText')
const bottomInput = document.getElementById('bottomInput')
const bottomText = document.getElementById('bottomText')
const topCheck = document.getElementById('topCheck')
const bottomCheck = document.getElementById('bottomCheck')

topInput.addEventListener('input', (e) => {
    const textoIngresado = e.target.value;
    topText.innerHTML = textoIngresado;
})

bottomInput.addEventListener('input', (e) =>{
    const textoIngresado = e.target.value;
    bottomText.innerHTML = textoIngresado;
})


topCheck.addEventListener('click', () => {
    if(topCheck.checked == true){
        topText.classList.toggle('d-none')
    } else {
        topText.classList.remove('d-none')
        
    }
})

bottomCheck.addEventListener('click', () => {
    if(bottomCheck.checked == true){
        bottomText.classList.toggle('d-none')
    } else {
        bottomText.classList.remove('d-none')
        
    }
})

// FILTROS //
let brillo = document.getElementById("brillo");
let opacidad = document.getElementById("opacidad");
let contraste = document.getElementById("contraste")
let desenfoque = document.getElementById("desenfoque")
let sepia = document.getElementById("sepia")
let negativo = document.getElementById("negativo")
let grises = document.getElementById("grises")

const filter = () => {
    memeBox.style.filter = `brightness(${brillo.value}%) opacity(${opacidad.value}%) contrast(${contraste.value}%) sepia(${sepia.value}%) invert(${negativo.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%)`
}

brillo.addEventListener('input', filter)
opacidad.addEventListener('input', filter)
contraste.addEventListener('input', filter)
sepia.addEventListener('input', filter)
negativo.addEventListener('input', filter)
grises.addEventListener('input', filter)
desenfoque.addEventListener('input', filter)