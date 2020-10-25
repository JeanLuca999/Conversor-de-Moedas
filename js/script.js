//funções do menu
const botaoMenu = document.getElementsByClassName('botao-menu')[0]
const menu = document.getElementsByClassName('menu')[0]
let menuAperto = false

botaoMenu.addEventListener('click', () => {
    if (menuAperto == false) {
        menu.style.transform = 'translateX(0%)'
        menuAperto = true
    } else if (menuAperto == true) {
        menu.style.transform = 'translateX(-100%)'
        menuAperto = false
    }
})

//funções para usar a api
const btnConverter = document.getElementById('converter')
const resultado = document.getElementById('resultado')
let codigoMoeda

btnConverter.addEventListener('click', () => {
    const moedaSelecionada = document.getElementsByClassName('escolher-moeda')[0].value
    const quantidade = document.getElementById('quantidade').value

    if(quantidade == ''){
        window.alert('Informe um valor!')
        return
    }

    switch (moedaSelecionada){
        case 'USD':
            codigoMoeda = 'US$'
            break
        case 'CAD':
            codigoMoeda = 'C$'
            break
        case 'EUR':
            codigoMoeda = '€'
            break
        case 'AUD':
            codigoMoeda = 'AU$'
            break
        case 'BTC':
            codigoMoeda = 'BTC'
            break
        case 'nenhum':
            window.alert('Selecione uma moeda!')
            return
    }

    fetch(`https://economia.awesomeapi.com.br/all/${moedaSelecionada}-BRL`).then((response) => response.json())
    .then(response => {
        resultado.innerHTML = `R$ ${quantidade} é igual a ${codigoMoeda} ${( quantidade / response[moedaSelecionada.toString()].ask ).toFixed(2)}`
    })
})
