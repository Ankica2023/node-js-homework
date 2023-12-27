// DOMASNA ZADACHA
const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Sara', prosek: 6.8, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Darko', prosek: 9.6, grad: 'Ohrid' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
  ];

  
//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 podredeni po ime(rastechki)
var filteredItems = studenti.filter((item)=>{
  return item.grad == "Skopje"
})
console.log(filteredItems)

var newFilteredItems = filteredItems.filter((item)=>{
  return item.ime.endsWith('a')
})
console.log(newFilteredItems)

var newFilteredItems2 = newFilteredItems.filter((item)=>{
  return item.prosek > 7
})
console.log(newFilteredItems2)

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
var filteredArray = studenti.filter((item)=>{
  return item.prosek > 9 && item.grad != "Skopje"
})
console.log(filteredArray)

myArray = filteredArray.sort(function(a,b){
  return parseFloat(b.prosek)-parseFloat(a.prosek)
})
console.log(myArray)

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
n = 3
var exercise3 = studenti.slice(0,n)
console.log(exercise3)
var filteredExercise = exercise3.filter((item)=>{
  return item.ime.length == 5
})
console.log(filteredExercise)
var orderedProsek = filteredExercise.sort(function(a,b){
  return parseFloat(b.prosek)-parseFloat(a.prosek)
})
console.log(orderedProsek)

//? 4. Vkupen prosek na studenti koi se od Kumanovo
var studentiOdKumanovo = studenti.filter((item)=>{
  return item.grad === "Kumanovo"
})
console.log(studentiOdKumanovo)
var prosekArray = studentiOdKumanovo.reduce((total, next)=>total + next.prosek, 0)/studentiOdKumanovo.length
console.log(prosekArray)
//? 5. Prosek na prosecite od gradovite Skopje i Ohrid
var studentiOdSkopje = studenti.filter((item)=>{
  return item.grad === "Skopje"
})
var prosekSkopje = studentiOdSkopje.reduce((total, next)=>total + next.prosek, 0)/studentiOdSkopje.length

console.log(prosekSkopje)

var studentiOdOhrid = studenti.filter((item)=>{
  return item.grad === "Ohrid"
})

var prosekOhrid = studentiOdOhrid.reduce((total, next)=>total + next.prosek,0)/studentiOdOhrid.length
console.log(prosekOhrid)

  prosek = (prosekSkopje + prosekOhrid)/2
  console.log(prosek)
  
  
//? 6. Da se dodade uste eden student so ime Goran prosek 8.3 i Strumica

studenti.push({ime: 'Goran' , prosek: 8.3 , grad: 'Strumica'})
console.log(studenti)


//? 7. Da se izbrishe prviot student vo studenti
var someNewArray = studenti.shift()
console.log(studenti)

