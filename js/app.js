// let numbers = [3, 5, 7, 8, 0];
// let res = [];
// for (let i = numbers.length; i >= 0; i--) {
//   if (numbers[i] % 2 == 1) {
//     res.push(numbers[i]);
//   }
// }
// console.log(res);

// let numbers = [1, 3, 4, 5, 8];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// let numbers = [3, 5, 7, 8, 0];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [6, 7, 8, 9];
// let res = arr1.concat(arr2, arr3);
// console.log(res);

// join .toStringga qaraganda takkomilashgan va join da orasiga nma qoyish ni ham berish mumkin

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.splice(2, 0 , 5,6,7);// xech narssa ochirilmaydi lekin qoshiladi
// arr.splice(3,2)// 3 indexdagi 2ta narsani ochir
// arr.splice(1, 3, "salom");// bu yerda 1indexdagi
// console.log(arr);

// arr.splice(2, 3);

// let res = arr.slice(1, 4);
// console.log(arr);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 7];
// console.log(arr.includes(1));
// console.log(arr.indexOf(7));
// console.log(arr.lastIndexOf(7));

// --------------> Sodda masalalar <--------------

// 1. Length

// 1. Berilgan massivdagi elementlar sonini toping.
// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.length);

// 2. Berilgan matndagi belgilar sonini aniqlang.
// let text = ["salom"];
// let res = text.toString();
// console.log(res.length);

// 3. Bo'sh bo'lmagan massivning oxirgi elementini aniqlash uchun length metodidan foydalaning.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = [numbers[numbers.length - 1]];
// console.log(res);

// 2. Concat

// 1. Ikki ta massivni birlashtiring va yangi hosil bo'lgan massivni qaytaring.
// let numbers = [1, 2, 3];
// let fruits = ["banan", "apelsin", "shoptoli"];
// let res = numbers.concat(fruits);
// console.log(res);

// 2. Uchta satrni qo‘shib, bitta matn yaratib oling.
// let text1 = ["Sa"];
// let text2 = ["lom"];
// let text3 = [" "];
// let text4 = ["du"];
// let text5 = ["nyo"];
// let res = text1.concat(text2, text3, text4, text5);
// console.log(res);

// 3. Ikki massivni birlashtirib, keyin ularga yangi element qo'shib, natijani toping.
// let numbers = [1, 2, 3];
// let cars = ["Mersedes-benz"];
// let res = numbers.concat(cars, 4);
// console.log(res);

// 3. Includes

// 1. Berilgan massiv ichida qidirilayotgan element borligini aniqlang.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = numbers.includes(7);
// console.log(res);

// 2. Matn ichida qidirilayotgan so'zning mavjud yoki mavjud emasligini tekshiring.
// let text = ["salom", "dunyo", "Mersedes-Benz"];
// let res = text.includes("Mersedes-Benz");
// console.log(res);

// 3. Massiv ichida 10 dan katta son mavjud yoki yo‘qligini aniqlang.
// let numbers = [1, 2, 3, 4, 100, 11, 19];
// let res = numbers.includes(numbers.find((x) => x > 10));
// console.log(res);

// 4. IndexOf, LastIndexOf

// 1. Massivda berilgan elementning birinchi paydo bo'lish indeksini toping.
// let numbers = [0, 1, 2,2, 3, 4, 5];
// let res = numbers.indexOf(0);
// console.log(res);

// 2. Massivda berilgan elementning oxirgi paydo bo'lish indeksini aniqlang.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
// let res = numbers.lastIndexOf(9);
// console.log(res);

// 3. Berilgan matnda "a" harfi birinchi va oxirgi marta qayerda paydo bo‘lishini toping.
// let text1 = ["a", "b", "c", "d", "a"];
// let res1 = text1.indexOf("a");
// let res2 = text1.lastIndexOf("a");
// console.log(res1);
// console.log(res2);

// 5. Sort

// 1. Massivdagi sonlarni o'sish tartibida joylashtiring.
// let numbers = [1, 9, 4, 6, 5, 7, 2];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// 2. Alfavit bo‘yicha massivdagi so'zlarni tartiblang.
// let userNames = ["Saidburxon", "Sardor", "Avazbek", "Ibrohim teacher"];
// userNames.sort();
// console.log(userNames);

// 3. Massivdagi sonlarni kamayish tartibida joylashtiring.
// let numbers = [1, 9, 4, 6, 5, 7, 2];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// 6. Reverse

// 1. Massivni teskari tartibda chiqaring.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = numbers.reverse();
// console.log(res);

// 2. Berilgan matnni harflarini teskari qilib ko‘rsating.
// let numbers = ["s", "a", "l", "o", "m"];
// let res = numbers.reverse();
// console.log(res);

// 3. Sonlar ketma-ketligini teskari tartibda ko‘rsating.
let numbers = [1, 9, 2, 8, 3, 7, 4, 6, 5];
let res = numbers.sort(function (a, b) {
  return b - a;
});
let result = res.reverse();
console.log(result);

// 7. ToString

// 1. Massivni matnga aylantiring.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.toString();
// console.log(res);

// 2. Massiv elementlarini vergul bilan ajratilgan matn ko'rinishida qaytaring.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.toString();
// console.log(res);

// 3. Sonlar ketma-ketligini matn ko'rinishida birlashtirib qaytaring.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.toString();
// console.log(res);

// 8. Join

// 1. Massiv elementlarini “-” belgisi bilan birlashtirib chiqaring.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.join("-");
// console.log(res);

// 2. Massivdagi so‘zlarni bo‘sh joy bilan birlashtirib, satr ko‘rinishida qaytaring.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.join(" ");
// console.log(res);

// 3. Massiv elementlarini “|” belgisi bilan birlashtirib, satr hosil qiling.
// let numbers = [1, 2, 3, 4, 5];
// let res = numbers.join("|");
// console.log(res);

// 9. Push, Shift

// 1. Massiv oxiriga yangi element qo‘shing va natijani ko‘rsating.
// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6, 7);
// console.log(numbers);

// 2. Massivdan birinchi elementni o‘chirib tashlang va natijani ko‘rsating.
// let numbers = [0, 1, 2, 3, 4];
// numbers.shift();
// console.log(numbers);

// 3. Berilgan massivga oxiriga bir nechta element qo‘shing, va massivdan birinchi elementni olib tashlang.
// let numbers = [0, 1, 2, 3];
// numbers.push(4, 5);
// numbers.shift();
// console.log(numbers);

// 10. Unshift, Pop

// 1. Massivning boshiga yangi element qo‘shing va natijani qaytaring.
// let numbers = [2, 3, 4, 5];
// numbers.unshift(1);
// console.log(numbers);

// 2. Massivning oxirgi elementini o‘chirib tashlang va natijani qaytaring.
// let numbers = [1, 2, 3, 4, 5, 6];
// numbers.pop();
// console.log(numbers);

// 3. Birinchi va oxirgi elementni qo‘shish va o‘chirish bilan bog'liq operatsiyalarni bajaring.
// let numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0);
// numbers.pop();
// console.log(numbers);
