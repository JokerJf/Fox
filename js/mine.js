let doc = document // -_-

let zero = doc.querySelector('.monal .number .text-2') // дата количества товара в бургере
let zero_2 = doc.querySelector('.monal .price .text-2') // дата цены товара в бургере

let z = 0 // <--- пуста както тут 
zero.innerHTML = 0 // количество товара
let gold = 9900 // цена товара

function tov() { // при клике на товар он добавляется в бургер
    doc.querySelector('.zero').innerHTML = doc.querySelector('.tovar').outerHTML // перенос кода в бургер
    doc.querySelector('.monal .dop').style.display = 'block' // доб интэрфэйс
    zero.innerHTML = Number(zero.innerHTML) + 1
    zero_2.innerHTML = Number(zero_2.innerHTML) + gold
    z = 1
    doc.querySelector('.monal').style.display = 'block'
}

function plus() { // для уменьшение количества и цены товара в бургере
    zero.innerHTML = Number(zero.innerHTML) + 1 // количество
    zero_2.innerHTML = Number(zero_2.innerHTML) + gold // цена
}
function minus() { // для уменьшение количества и цены товара в бургере
    zero.innerHTML = Number(zero.innerHTML) - 1 // количество 
    zero_2.innerHTML = Number(zero_2.innerHTML) - gold // цена
}

function monal() { // модифицир. код 2 раза можно кликать кнопку бургер
    if (z == 0) {
        z = 1
        doc.querySelector('.monal').style.display = 'block' // вкл бургер
    }else if (z == 1){
        z = 0
        doc.querySelector('.monal').style.display = 'none' // выкл бургер
    }
    
}



























