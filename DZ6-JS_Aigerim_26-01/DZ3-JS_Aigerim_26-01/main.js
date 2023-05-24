//ЗАДАЧА 1
// const type = (item) => {
//     console.log(typeof item)
// }

// type(true)



// ЗАДАЧА 2
// const calculator = (operator, num1, num2) => {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             if (num2 === 0) {
//                 return "Ошибка: на 0 делить нельзя";
//             } else {
//                 return num1 / num2;
//             }
//         default:
//             return "Некорректный оператор";
//     }
// }

// console.log(calculator("*", 10, 2))



// 3.ЗАДАЧА
// const getPositionArrayElement = (element, arr) => {
//     let begin = 0;
//     let end = arr.length - 1

//     while (begin <= end) {
//         let middle = Math.floor((begin + end) / 2)

//         if (arr[middle] === element) {
//             return middle;
//         } else if (arr[middle] < element) {
//             begin = middle + 1
//         } else {
//             end = middle - 1
//         }
//     }

//     return -1
// }

// console.log(getPositionArrayElement(7, [2, 1, 4, 5, 7]))