const push = document.querySelector('.push');
const menu = document.querySelector('.menu');
const input = document.querySelector('.input');
const select = document.querySelector('.select');
const title = document.querySelector('.title');


// function f1(a = 10, b = 0, c = 0) {
//   console.log(a + b + c)
// }
// f1(1, 2, 3)
// f1()


// function f2(a, max, min, out = title) {
//   let num = min + Math.floor(Math.random() * (max - min))
//   out.innerHTML = `<i>${num * a}</i>`;
//   console.log(arguments[0])
// }
// // function f2() {
// //   let num = arguments[1] + Math.floor(Math.random() * (arguments[2] - arguments[1]))
// //   arguments[3].innerHTML = `<i>${num * arguments[0]}</i>`;
// //   console.log(arguments)
// // }

// push.onclick = () => {
//   f2(2, 100, 200, menu)
//   f2(2, 100, 200, title)
// }
// function showTime() {
//   console.log(arguments);
//   let showSum = Array.from(arguments).reduce(function (accum, item) {
//     return accum = accum + item;
//   });
//   console.log(showSum);
// }
// ----------------------------------------------------------------------------rest(...args)
function showTime(...args) {
  console.log(args);
  let showSum = args.reduce(function (accum, item) {
    return accum = accum + item;
  });
  console.log(showSum);
}
showTime(1, 2, 3, 4, 5, 56, 67, 8, 4, 9, 4, 6, 5, 4, 3, 3, 2, 4, 2, 354, 56, 54, 6, 68, 7, 54, 3, 4, 4, 234, 4)