// // // // // // // function ucFirstLetters(myString) {
// // // // // // //     var NewString = ""
// // // // // // //     for (x in myString) {

// // // // // // //         if ((x==0) || (myString.charAt(x-1) == " ")){NewString = NewString + myString.charAt(x).toUpperCase();}
// // // // // // //         else {NewString = NewString + myString.charAt(x).toLowerCase();}
              
// // // // // // //     }
// // // // // // //     return NewString
// // // // // // //   }

// // // // // // function ucFirstLetters(myString){
// // // // // //     var stringArray = myString.split(" ");

// // // // // // stringArray = stringArray.map(function(x){ 
// // // // // //     return x.charAt(0).toUpperCase() + x.slice(1); })
// // // // // //     var txt = ""
// // // // // //    stringArray.forEach(myFunction);
  
// // // // // //     function myFunction(value, index, array) {
// // // // // //       txt = txt + value + " ";
// // // // // //     }

// // // // // // return txt
// // // // // // }

// // // // // // console.log(ucFirstLetters("los angeles") ) //Los Angeles

// // // // // // Question 2:

// // // // // // function truncate(str, max) {

// // // // // //   // if(str.length > max)  return str.slice(0, max) + '...';
// // // // // //   // else return str;

// // // // // //   return (str.length > max)?str.slice(0, max) + '...':str

// // // // // // }

// // // // // // console.log(truncate('Amitabh',5))

// // // // // // Question no: 3

// // // // // // const animals = ['Tiger', 'Giraffe']
// // // // // // // Janwar = [...animals,'Cat','Dog']
// // // // // // // console.log(Janwar)

// // // // // // animals.push("Cat");
// // // // // // animals.push("Dog");
// // // // // // animals.pop();
// // // // // // animals.unshift("Dog2");
// // // // // // animals.unshift("Cat");
// // // // // // animals.shift();

// // // // // // console.log(animals.sort())
// // // // // // function replaceMiddleAnimal(newValue){
// // // // // //     var x = animals.length;
// // // // // //     if(x % 2 == 0){console.log('There is no middle element in this array')}
// // // // // //     else{
// // // // // //         var y = parseInt(x/2);
// // // // // //         animals[y] = newValue;
// // // // // //         console.log(animals);
// // // // // //     }
// // // // // // }
// // // // // // replaceMiddleAnimal('xyz')

// // // // // //Question 4

// // // // // // function camelCase(cssProp) {
// // // // // //     let mystring = "";
// // // // // //     var resultStrig = cssProp.split("-");
// // // // // //     resultStrig.forEach(myFunction);
  
// // // // // //     function myFunction(value, index, array) {
// // // // // //       mystring =  mystring +  (index > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : value);
// // // // // //     }
// // // // // //     return mystring;
// // // // // //   }
// // // // // //   console.log(camelCase("margin-left")); // marginLeft
// // // // // //   console.log(camelCase('background-image')) // backgroundImage
// // // // // //   console.log(camelCase('display')) // display

// // // // // function camelCase(cssProp) {
// // // // //     let mystring = "";
// // // // //     var resultStrig = cssProp.split("-");
  
// // // // //   for (let i = 0; i < resultStrig.length; i++) {
// // // // //       mystring =  mystring +  (i > 0 ? resultStrig[i].charAt(0).toUpperCase() + resultStrig[i].slice(1) : resultStrig[i]);
// // // // //   }
  
// // // // //   return mystring
// // // // //   }

// // // // // function camelCase(cssProp) {
// // // // //     let mystring = "";
// // // // //     var resultStrig = cssProp.split("-");
  
// // // // //     for (let i in resultStrig) {
// // // // //       mystring =  mystring +  (i > 0 ? resultStrig[i].charAt(0).toUpperCase() + resultStrig[i].slice(1) : resultStrig[i]);
// // // // //     }
  
// // // // //   return mystring
// // // // //   }
// // // // // function camelCase(cssProp) {
// // // // //     let mystring = "";
// // // // //     var resultStrig = cssProp.split("-");
  
// // // // //     for (let i of resultStrig) {
// // // // //       mystring =  mystring +  (resultStrig.indexOf(i) > 0 ? i.charAt(0).toUpperCase() + i.slice(1) : i);
// // // // //     }
  
// // // // //   return mystring
// // // // //   }

// // // // // Question 5

// function currencyOperation(float1, float2, operation, numDecimals) {
//     var result = "";
//     switch (operation) {
//       case "+":
//         result = parseFloat((float1 + float2).toFixed(numDecimals));
//         break;
//       case "-":
//         result = parseFloat((float1 - float2).toFixed(numDecimals));
//         break;
//       case "/":
//         result = parseFloat((float1 / float2).toFixed(numDecimals));
//         break;
//       case "*":
//         result = parseFloat((float1 * float2).toFixed(numDecimals));
//         break;
//       default:
//         console.log("default");
//     }
//     return result;
//   }
  
//   console.log(currencyOperation(0.3, 0.2, "+", 3))
//   console.log(currencyOperation(0.3, 0.2, "-", 4))
//   console.log(currencyOperation(0.3, 0.2, "/", 5))
//   console.log(currencyOperation(0.3, 0.2, "*", 6))
//   console.log(0.3 == currencyOperation(0.1, 0.2)) // true
//   console.log(0.3 == currencyOperation(0.1, 0.2, "+", 1)) // true

// //Question no.6

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(arr = []){
//     var mySet = new Set(arr);
//     const myArray = Array.from(mySet);
//     return myArray;
// }

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

//Question 7
//Question no:7
// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
//     ];

// function getBookTitle(bookId) {
//   const found = books.find((element) => element.id == bookId);
//   return found ? found.title : undefined;
// }
// // console.log(getBookTitle(10));
// function getOldBooks(){
// const result = books.filter((element) => element.year < 1950);
// return result;
// }
// // console.log(getOldBooks());
// function addGenre(){
//     //let newbooks = books.map(function(currentValue, index, arr){currentValue.genre = "classic"})
//     let newbooks = books.map(product => ({...product, genre: "classic"}) )
//     return newbooks;
// }
// console.log(addGenre());
// // (Extension) Write a function getTitles(authorInitial) that uses map and filter together 
// //to return an array of book titles for books written by authors whose names start with authorInitial.
// // function getTitles(authorInitial){
// //     let result2 = books.filter((element) => element.author.startsWith(authorInitial)== true);  //text.startsWith("Hello")
// //     let result3 = result2.map(product => product.title)
// //     return result3;
// // } 
// // console.log(getTitles("George"));

// // Question 8:

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// phoneBookABC.set('Caroline', '11111111')

// const phoneBookDEF = new Map([
//     ["Dnnabelle", '0412312340'],
//     ["Earry", '0433221110'],
//     ["Faroline", '0455221180']
//   ]);

// function printPhoneBook(myMap){
// for (let x of myMap.entries()){
//   console.log("Name: " + x[0] + ", Phone: " + x[1]);
// }
// }
// const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// function printAllNames(){
//     for (let x of phoneBook.entries()){
//         console.log(x[0]);
//       }
// }
// printAllNames()
// console.log(phoneBook)
// console.log(phoneBookABC)
// console.log(phoneBookDEF)
// printPhoneBook(phoneBookABC)
// printPhoneBook(phoneBookDEF)

// Question 9:

// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };

// function sumSalaries(salaries){
//     const values = Object.values(salaries);
//     const sum = values.reduce((accumulator, value) => { return accumulator + value; }, 0);
//     return sum;
//     }

// function topEarner(salaries){
//     return Object.keys(salaries)[(Object.values(salaries)).indexOf(Math.max( ...Object.values(salaries)))]
// }

// console.log(sumSalaries(salaries))
// console.log(topEarner(salaries))

//Question 10:

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// console.log((60 * today.getHours()) + ' minutes have passed so far today')
// console.log((60 * 60 * today.getHours()) + ' seconds have passed so far today')


const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')
// console.log((60 * today.getHours()) + ' minutes have passed so far today')
// console.log((60 * 60 * today.getHours()) + ' seconds have passed so far today')

// let years = 1984 - 2024;
// let months = 2 - 3;
// let days = 2 - 23;

// console.log('I am ' + -years + ' years, ' + -months + ' months and ' + -days + 'days old')


// let date1 = new Date("01/16/2024");
// let date2 = new Date("01/26/2024");

// let Difference_In_Time = date2.getTime() - date1.getTime();
// let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

// console.log
//     ("Total number of days between dates:\n" +
//         date1.toDateString() + " and " +
//         date2.toDateString() +
//         " is: " + Difference_In_Days + " days");






// let years = 1984 - 2024;
// let months = 2 - 3;
// let days = 2 - 23;

// console.log('I am ' + -years + ' years, ' + -months + ' months and ' + -days + 'days old')


// let date1 = new Date("01/16/2024");
// let date2 = new Date("01/26/2024");

// let Difference_In_Time = date2.getTime() - date1.getTime();
// let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

// console.log
//     ("Total number of days between dates:\n" +
//         date1.toDateString() + " and " +
//         date2.toDateString() +
//         " is: " + Difference_In_Days + " days");





  

  


    


  