const moment = require("moment");
// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr) {
  let max_num = Number.MIN_VALUE,
    max_idx = 0;
  for (index in arr) {
    if (arr[index] > max_num) {
      max_num = arr[index];
      max_idx = index;
    }
  }
  return max_idx;
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
console.log(getHighestIndex([5, 21, 12, 21, 50, 8])); // 4

// F-TASK:

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true,
// qatnashmasa false qaytarishi kerak.
// MASALAN: findDoublers("hello") return true

// function findDoublers(word) {
//   chars = {};
//   for (char of word) {
//     if (!chars[char]) {
//       chars[char] = true;
//     } else {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDoublers("hello")); // return true
// console.log(findDoublers("halo")); // return false

// E-TASK:
// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
// function getReverse(word) {
//   return word.split("").reverse().join("");
// }

// console.log(getReverse("hello")); // "olleh"

// D-TASK:

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
// Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3)
// & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   // 3ta method
//   qoldiq() {
//     const currentTime = moment().format("HH:mm");
//     console.log(
//       `hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`
//     );
//   }
//   sotish(name, number) {
//     this[name] -= number;
//   }
//   qabul(name, number) {
//     this[name] += number;
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); // hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq(); // hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// C-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(str1, str2) {
//   const str1_s = str1.split("").sort().join("");
//   const str2_s = str2.split("").sort().join("");
//   return str1_s == str2_s;
// }
// let result = checkContent("mitgroup", "gmtiprou"); // true;
// console.log(result);
// result = checkContent("mitgroupp", "gmtiprou"); // false
// console.log(result);

// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// masalani yechimi:

// function countDigits(word) {
//   return word.split("").reduce((count, char) => {
//     return char >= "0" && char <= "9" ? count + 1 : count;
//   }, 0);
// }

// let result = countDigits("ad2a54y79wet0sfgb9"); // 7
// console.log(result);
// result = countDigits("2024 is the year!"); // 4
// console.log(result);

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

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
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Iltimos, insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a <= 30) callback(null, list[1]);
//   else if (a <= 40) callback(null, list[2]);
//   else if (a <= 50) callback(null, list[3]);
//   else if (a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
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
