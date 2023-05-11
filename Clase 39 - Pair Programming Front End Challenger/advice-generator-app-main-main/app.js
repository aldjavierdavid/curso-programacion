// ¡Buena suerte!
let dice = document.querySelector('.card__dice')
let quote = document.querySelector('.card__quote')
let number = document.querySelector('.card__number')

dice.addEventListener('click', async function generateQuote(params) {
    const response = await fetch('https://api.adviceslip.com/advice')
    const datos = await response.json()
    console.log(datos);
    
    number.textContent = ('ADVICE #'+datos.slip.id)
    quote.textContent = (datos.slip.advice)
        
})

/** quote.addEventListener('click', function generateQuote(params) {
    console.log('test');
    
})*/