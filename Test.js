const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log((60 * today.getHours()) + ' minutes have passed so far today')
console.log((60 * 60 * today.getHours()) + ' seconds have passed so far today')

let years = 1984 - 2024;
let months = 2 - 3;
let days = 2 - 23;

console.log('I am ' + -years + ' years, ' + -months + ' months and ' + -days + 'days old')


let date1 = new Date("01/16/2024");
let date2 = new Date("01/26/2024");

let Difference_In_Time = date2.getTime() - date1.getTime();
let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

console.log
    ("Total number of days between dates:\n" +
        date1.toDateString() + " and " +
        date2.toDateString() +
        " is: " + Difference_In_Days + " days");




