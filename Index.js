// function ucFirstLetters(myString) {
//     var NewString = ""
//     for (x in myString) {

//         if ((x==0) || (myString.charAt(x-1) == " ")){NewString = NewString + myString.charAt(x).toUpperCase();}
//         else {NewString = NewString + myString.charAt(x).toLowerCase();}
              
//     }
//     return NewString
//   }

function ucFirstLetters(myString){
    var stringArray = myString.split(" ");

stringArray = stringArray.map(function(x){ 
    return x.charAt(0).toUpperCase() + x.slice(1); })
    var txt = ""
   stringArray.forEach(myFunction);
  
    function myFunction(value, index, array) {
      txt = txt + value + " ";
    }

return txt
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles