function populateUFs(){
   const ufSelect = document.querySelector("select[name=uf]")

      fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then( res => res.json() )
      .then( states => {

         for( const state of states){
            ufSelect.innerHTML += `<option value"${state.id}">${state.nome} </option>`
         }

      } )
   }

populateUFs()

function getCities(event){
   const citySelect = document.querySelector("select[name=city")
   const stateInput = document.querySelector("input[name=states")

   const ufValue = event.target.value

   const indexOfSelectedState = event.target.selectedIndex
   stateInput.value = event.target.options[indexOfSelectedState].text

   const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`

   citySelect.innerHTML = "<option value>Seleciona a Cidade</option>"
   citySelect.disabled = true

   fetch(url)
   .then( res => res.json() )
   .then( cities => {

      for( const city of cities){
         citySelect.innerHTML += `<option value"${city.nome}">${city.nome} </option>`
      }

      citySelect.disabled=false

   } )
}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)

/*
      fuction anomina
   function (parametro){return parametro}
   (parametro) => {return parametro }
   parametro => parametro

*/
/*items de coletas */

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const items of itemsToCollect) {
   items.addEventListener("click", handleSelectedItem)

}

const collectItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
   const itemLi = event.target

   // add or remove a class JS
   itemLi.classList.toggle("selected")

   const itemId = itemLi.dataset.id

   const alreadySelected = selectedItems.findIndex(function(item){
      const itemFound = item === itemId //this is true or false
      return itemFound
   })

   if (alreadySelected >= 0 ){
      const filteredItems = selectedItems.filter(item => {
         const itemIsDifferent = item != itemId
         return itemIsDifferent
      })
      selectedItems = filteredItems

   }else {
      selectedItems.push(itemId)

   }

   collectItems.value = selectedItems

}
