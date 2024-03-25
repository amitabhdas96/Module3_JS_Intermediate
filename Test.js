const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};
user.sayHi(); // called directly, works! Hi, John
// setTimeout(user, 1000); // passed as reference, fails! Hi, undefined

function isOdd(number) {
  return number % 2;
}
a = [2,3, 4, 6, 8]
console.log([10, 1, 3, 4, 8, 9].filter.call(a, isOdd));
