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
// function showTime(...args) {
//   console.log(args);
//   let showSum = args.reduce(function (accum, item) {
//     return accum = accum + item;
//   });
//   console.log(showSum);
// }
// showTime(1, 2, 3, 4, 5, 56, 67, 8, 4, 9, 4, 6, 5, 4, 3, 3, 2, 4, 2, 354, 56, 54, 6, 68, 7, 54, 3, 4, 4, 234, 4)

// ------------------------------------------------------------------------------callback

// function showResult(result) {
//   menu.innerHTML = `<b>!!!${result}!!!</b>`
// }
// function showSum(number, callback) {
//   callback(number)
// }
// showSum(6, showResult);

// -t1
// function start(a, c, b) {
//   return console.log(a + c / b);
// }
// push.onclick = () => {
//   start(2, 4, input.value)
// }
// -t2
// let rundomNumber = function (min, max) {
//   return min + Math.floor(Math.random() * (max - min));
// }

// function threeArg(a, b, out) {
//   out.innerHTML = a + ':' + b;
// }
// push.onclick = (...args) => {
//   threeArg(rundomNumber(1, 10), rundomNumber(10, 20), title);
//   console.log(args);
// }

// -t3
// function rundomNumber(min, max) {
//   return min + Math.floor(Math.random() * (max - min));
// }
// push.onclick = () => {
//   menu.innerHTML = `${rundomNumber(0, input.value)}  times!!`
// }

// -t4

// function outZero(a, b, out, c) {
//   c === b ? summ = c : summ = a + b;
//   out.innerHTML = summ;
// }
// push.onclick = () => {
//   outZero(5, +input.value, title, 2)
// }

// -t5

// function task4(a, b, c = 1) {
//   let summ = 0;
//   if (b === c) {
//     summ = c;
//   } else {
//     summ = a / b;
//   }
//   return console.log(summ)
// }
// task4(5, 1)

// -t6
const ar6 = [2, 3, 4, 5, 6, 'esr', 'fdfd']
const st6 = 'fork'
// function task6(out, block) {
//   out.innerHTML = block.join(', ')
// }
// push.onclick = () => {
//   task6(title, array)
// }

// -t7

// function task7(out, array) {
//   out.innerHTML = Array.isArray(array);
// }
// task7(title, ar6)
// task7(menu, st6)

// -8

// function cleared(text, out) {
//   out.innerHTML = text.trim().toLowerCase();
// }
// cleared(input.value, title);
// cleared(input.value, menu);

// -9

// function task10(text, out) {
//   let clearText = text.trim().toLowerCase()
//   typeof clearText === 'string' ? out.innerHTML = clearText : out.innerHTML = 'error';
// }

// task10(input.value, menu)

// -10

// function inspect(...args) {
//   console.log(args.length);
// }
// inspect(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1)

// -11
function inspect(...args) {
  let accum = 0;
  args.forEach(function (item) {
    accum = accum + item;
  })
  console.log(accum)
}
inspect(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1)