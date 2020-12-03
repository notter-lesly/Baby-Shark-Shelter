 function mensagem(event){
     console.log('kedi')
     event.preventDefault()
    alert('thank you! Soon we will contact you')
}

const botao= document.querySelector('form')

botao.addEventListener('submit', mensagem)


console.log("oi")