// console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

// *********************** Event Loop and Callbacks

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Iltimos, insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a <= 30) callback(null, list[1]);
//   else if (a <= 40) callback(null, list[2]);
//   else if (a <= 50) callback(null, list[3]);
//   else if (a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("error:", err);
//   console.log("Result:", data);
// });
// console.log("passed here 1");

// // *********************** Asynchronus functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Iltimos, insert number", null);
//   else if (a <= 20) return list[0];
//   else if (a <= 30) return list[1];
//   else if (a <= 40) return list[2];
//   else if (a <= 50) return list[3];
//   else if (a <= 60) return list[4];
//   else return list[5];
// }

// // ************************* Call via then/catch:
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("Result:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("passed here 1");

// // ************************* Call via async/await:
// async function run() {
//   let res = await maslahatBering(65);
//   console.log("Result:", res);

//   res = await maslahatBering(30);
//   console.log("Result:", res);

//   res = await maslahatBering(83);
//   console.log("Result:", res);

//   res = await maslahatBering(55);
//   console.log("Result:", res);
// }
// run();

// // *********************** Promise functions
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("Iltimos, insert number", null);
//   else if (a <= 20) return list[0];
//   else if (a <= 30) return list[1];
//   else if (a <= 40) return list[2];
//   else if (a <= 50) return list[3];
//   else if (a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 3000);
//     });
//   }
// }

// async function run() {
//   let res = await maslahatBering(65);
//   console.log("Result:", res);

//   res = await maslahatBering(30);
//   console.log("Results:", res);

//   res = await maslahatBering(83);
//   console.log("Result:", res);

//   res = await maslahatBering(55);
//   console.log("Result:", res);
// }
// run();

// setInterval with Callback
function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Iltimos, insert number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a <= 30) callback(null, list[1]);
  else if (a <= 40) callback(null, list[2]);
  else if (a <= 50) callback(null, list[3]);
  else if (a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 3000);
  }
}

console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) console.log("error:", err);
  console.log("Result:", data);
});
console.log("passed here 1");

// A-TASK:
// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.
// masalani yechimi:

// function countLetter(letter, word) {
//   return word.split("").reduce((count, char) => {
//     return char === letter ? count + 1 : count;
//   }, 0);
// }

// let result = countLetter("e", "engineer"); // 3
// console.log(result);
// result = countLetter("i", "Mit Devex organish"); // 2
// console.log(result);
