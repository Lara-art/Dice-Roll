//Defino los numeros como variables
const one = '1.png';

//Defino los dados
const diceSix =[1, 2, 3, 4, 5, 6];
const diceTwenty =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


//La funcion de la logica que usare para los dados
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


//Funcion para cada uno de los dados
function randomTwenty(array){
  const random = Math.floor(Math.random()*array.length);
  if (array[random] === 1) {
    document.querySelector('#image').src = one;
    //si sale 1 me devuelve una imagen asignada al numero uno
  }
  return array[random];
}


console.log(randomValueFromArray(diceSix));