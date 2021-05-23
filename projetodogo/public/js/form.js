 function mensagem(event){
    event.preventDefault()
    alert('thank you! Soon we will contact you')
}

const botao= document.querySelector('form')

botao.addEventListener('submit', mensagem)


console.log("oi")