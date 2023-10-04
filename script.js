const lis = document.querySelectorAll(".fin")
const buscador = document.querySelector("#buscador")


//Funcion 1
function filtrar(substring, elements){
   cumplen = [] 
for (i of elements){
    if(i.innerText.toLowerCase().includes(substring.toLowerCase())){
       cumplen.push(i)
   }
 }
 return cumplen
}

//function strip_ul(){
//shown_list = document.querySelectorAll("li:not(.d-none)") 
//for (i of shown_lis){
//    i.classList.remove("list-group-item-secondary")
//} 
//for (i=0;i<shown_lis.length;i+=2){
 //   shown_lis[i].classList.add("list-group-item-secondary")
//}
//}


//Funcion 2
buscador.addEventListener("input", ()=>{
    console.log("carlitos")
    if (buscador.value == ""){
        for (i of lis){
            i.classList.remove("d-none")
        }
    }else{
        filtrados = filtrar(buscador.value, lis)
        for(i of lis){
            i.classList.add("d-none")
        }
        for (i of filtrados){
            i.classList.remove("d-none")
        }
    }
    strip_ul()
})

strip_ul()