const topo= document.getElementById("topo")

console.log(topo.innerHTML)

function volta(){

   topo.scrollTop(0)
}

topo.addEventListener("onClick", volta)