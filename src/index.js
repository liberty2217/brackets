module.exports = function check(str, bracketsConfig) {

        let arr = str.split('');
        let commonArr = ['{', '[', '('];
        let obj= { 
         '{': '}',
         '[': ']',
         '(': ')', 
       };
       let tempArr = [];
       
       for (let x = 0; x < str.length; x++) {
        if (commonArr.includes(arr[x])) {
        tempArr.push(arr[x]);
        } else {
           let val = tempArr.pop(); // remove in any circumstances 
           if (obj[val] != arr[x]) { 
             // applied to the value through the key obj['{'] and if it is equal to the current iteration symbol ('}') - return true and remove (pop) the element
           return false;
           // return false 
           }
        }
       }
       
       if (tempArr.length != 0) {
        return false;
        //  return false
        }
        console.log(tempArr);
        return true;
       
       
      
  
//   let concatArrays = [];

//   for (let i = 0; i < bracketsConfig.length; i++) {
//       concatArrays = twoBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
//       // since there are only 2 elements in array we push them into a new array (twoBrackets)
//   }

};


