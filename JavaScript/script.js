const push = document.querySelector('.push');
const menu = document.querySelector('.menu');
const input = document.querySelector('.input');
const select = document.querySelector('.select');
// function testFunction(a, b) {
//   let c = a + b;
//   menu.innerHTML = c;
// }
// push.onclick = (eventClick) => {
//   function goTest() {
//     menu.onclick = () => console.log(this.alert.name = 'test');
//   }
//   goTest()
//   console.log(eventClick)
// }




// function Utime(roundTime = 100) {
//   let time = Math.floor(new Date().getTime() / roundTime)
//   console.log(time)
// }

// Utime(1000);

// // push.onclick = () => {
// //   Utime(1000)
// // };

// function randomInteger(max, min) {
//   integer = min + Math.round(Math.random() * (max - min));
//   console.log(integer);
// }
// // randomInteger(5, 1)
// randomInteger(0, 5)

// console.log(randomInteger);

// function randomInteger(min, max) {
//   console.log(max + min);
// }


// rand(0, 10)
// rand(10, 20)
// rand(20, 30)


// let fuWidth = 500;
// menu.onmousemove = () => {
//   function countFu() {
//     menu.style.width = fuWidth + 'px';
//     fuWidth--;
//     if (fuWidth === 100) { fuWidth = 500 }
//   }
//   countFu();
// };


function getRandomInt(min, max) {
  num = min + Math.floor(Math.random() * (max - min));
  console.log(num);
  return num
}
// getRandomInt(117, 132)

// push.onclick = function (e) {
//   getRandomInt(1, 100)
//   menu.textContent = num
// }

// push.addEventListener("click", function (e) {
//   menu.textContent = getRandomInt(1, 10) + 'first';
//   menu.onclick = function () {
//     push.textContent = getRandomInt(11, 20) + 'second'
//     push.onclick = function () {
//       menu.textContent = getRandomInt(1, 10) + 'first';
//     }
//   }
// })

// function a3() {
//   menu.onclick = function () {
//     menu.style.backgroundColor = `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(0, 255)})`;
//   }
// }
// push.onclick = a3;

// function test() {
//   let num = input.value;
//   num % 2 == 0 ? menu.textContent = 'odd' : menu.textContent = 'even';
// }
// push.onclick = test;


// function test() {
//   let num = getRandomInt(10, 100)
//   num % 2 === 0 ? menu.textContent = 'odd' : menu.textContent = 'even';
// }

// push.onclick = () => {
//   test();
//   if (menu.textContent === 'odd') {
//     menu.style.backgroundColor = 'red';
//   } else if (menu.textContent === 'even') {
//     menu.style.backgroundColor = 'green'
//   }
// }
// let boxwidth = 100;
// push.onclick = function () {
//   menu.style.width = boxwidth + 'px';

//   if (boxwidth === 400) {
//     console.log(boxwidth)
//   } else {
//     boxwidth = boxwidth + 20;
//   }
// }
// let num = 0;
// function plus() {
//   menu.textContent = num;
//   num === 35 ? num = 0 : num++;
// }
// push.onclick = plus;


select.onchange = function () {
  menu.textContent = select.value;
}