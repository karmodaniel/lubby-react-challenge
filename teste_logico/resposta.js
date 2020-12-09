//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
function newArray(num, value) {
  const array = [];

  for (let i = 0; i < num; i++) {
    array.push(value);
  }
  return array;
}
console.log('question 1:', newArray(3, 3));


// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function reorder(data) {
  const arrayLenght = data.length;
  let newArray = [];
  for (let i = arrayLenght - 1; i >= 0; i--) {
    newArray.push(data[i]);
  }

  return newArray;
}

data = [1, 2, 3, 4];
console.log('question 2:', reorder(data));
//3)Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null)
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
function validation(value) {
  let result = [];

  value.forEach((element) => {
    if (element) result.push(element);
  });

  return result;
}

console.log('question 3:', validation([1, 2, "", undefined]));


// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
function keyAndValue(value) {
  let object = {};
  let array = [];
  value.forEach((element) => {
    array.push(element);
  });

  const map = new Map(array);
  object = Object.fromEntries(map);

  return `question 4: ${JSON.stringify(object)}`;
}
console.log(keyAndValue([["c", 2],["d", 4]]));


// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
function changeArray(value1, ...value2) {
  let newArray = [];

  for (let j = 0; j < value2.length - 1; j++) {
    for (let i = 0; i < value1.length - 1; i++) {
      if (value2[j] !== value1[i]) {
        newArray.push(value1[i]);
      }
    }
  }
  return newArray;
}

console.log('question 5:', changeArray([5, 4, 3, 2, 5], 5, 3));


// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
function duplicated(value) {
   const array = value.filter((element, index) => {
       return (value.indexOf(element) === index) 
   })

   return array;
}

console.log('question 6:', duplicated([1,2,3,3,2,4,5,4,7,3]));


// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
function equality(array, array1) {
  resp = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array1[i]) {
      resp = true;
    }
  }
  return `question 7: ${resp}`;
}

console.log(equality([1, 2, 3, 4], [1, 2, 3, 4]));


// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
function uniqueArray(value) {
   const valid = /\d/g
   const array = [];

   const str = value.toString().match(valid);
   
  str.forEach(element => {
      array.push(parseInt(element));
  })

  return array;
}

console.log('question 8: ',uniqueArray([1, 2, [3], [4, 5]]))


// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
function slice(value1, value2) {
  let array = [];
  const array2 = [];
  let cont = 1;

  value1.forEach((element, index, self) => {
     array.push(element);
    if (cont === value2 || index == self.length -1) {
      array2.push(array);
      array = [];
      cont = 0;
    }
    cont++;
    
  })
  return array2;
}
console.log('question 9: ', slice([1, 2, 3, 4, 5], 2))


// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
function reapete (array, array1) {
  newArray = array.filter((element) => {
      return array1.indexOf(element) !== -1
  })
  return newArray;
}
console.log('question 10:', reapete([6, 8], [8, 9]));
// ps: Esses exercícios são de senso comum da comunidade desenvolvimento, utilize o melhor padrão para implementação, criando uma semântica factível.
