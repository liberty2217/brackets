module.exports = function check(str, bracketsConfig) {
     
   // используем структуру стек
  // из test.js можно определить, что массивы хранят в себе все закрытые и открытые скобки, которые можно сразу добавить в отдельные массивы открытых/закрытых скобок

  const openBrackets = [];
  const closeBrackets =[]; 
  // так как из test.js уже можно понять, что первый элемент массива - открытая скобка, а второй - закрытая, мы можем их разделить на два массива (открытых скобок и закрытых кодом ниже:)
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  } 

  
  const bracketsToClose = []; // массив для хранения открытых скобок - ищем все закрытые


  
  for (let i = 0; i < str.length; i++) {

    // Если скобка либо не соответствует lastNotClosed, либо открытая при проверке
    // Если скобка открытая, то push в bracketsToClose 
      

    //если скобка закрытая (сравнивается текущий i элемент со всеми элементами openBrackets, если его нет, то метод indexOf вернет -1. В ином случае выдастся индекс совпадающего элемента)
    if (closeBrackets.indexOf(str[i]) !== -1 && bracketsToClose.length) {
			//Если скобка закрытая, то нужно проверить соответствует ли она последней незакрытой из bracketsToClose. 
      //Если да, то необходимо "обнулить стек" - сделать pop из bracketsToClose 
      //Если нет, то начать новую итерацию continue
      
      let lastNotClosed = bracketsToClose[bracketsToClose.length - 1]; 
      //Последний элемент bracketsToClose
      // Индекс последнего lastNotClosed в массиве bracketsConfig. 
     
      const openedBracketIndex = openBrackets.indexOf(lastNotClosed);
       // Такой же индекс должен быть у текущего элемента если он соответсвует lastNotClosed
      
      if (closeBrackets[openedBracketIndex] === str[i]) {
        bracketsToClose.pop();
        continue;
      }
    }
    if(openBrackets.indexOf(str[i]) !== -1) {
      bracketsToClose.push(str[i]);
    } else {
      return false;
    }
   
  }
  if(bracketsToClose.length > 0) {
    return false;
  }
  else {
  return true;
  } 
}