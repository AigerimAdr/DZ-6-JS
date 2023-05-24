
// 3. ЗАДАЧА
// 1 СПОСОБ

// const changeColor = () => {
//     const user = prompt("Введите цвет:").toLowerCase()

//     const lights = document.querySelectorAll(".light")

//     lights.forEach(light => {
//         light.style.backgroundColor = "gray"
//         light.querySelector(".text").innerHTML = ""
//     })

//     if (user === "красный") {
//         const redLight = document.querySelector(".red")
//         redLight.style.backgroundColor = "red"
//         redLight.querySelector(".text").innerHTML = "STOP"
//     } else if (user === "желтый") {
//         const yellowLight = document.querySelector(".yellow")
//         yellowLight.style.backgroundColor = "yellow"
//         yellowLight.querySelector(".text").innerHTML = "WAIT"
//     } else if (user === "зеленый") {
//         const greenLight = document.querySelector(".green")
//         greenLight.style.backgroundColor = "green"
//         greenLight.querySelector(".text").innerHTML = "GO"
//     } else {
//         alert("Неверный ввод!")
//     }
// }

// window.onload = () => changeColor()


// 2 СПОСОБ SWITCH CASE


// const changeColor = () => {
//     const user = prompt("Введите цвет:").toLowerCase();

//     const lights = document.querySelectorAll(".light");

//     lights.forEach(color => {
//         color.style.backgroundColor = "gray";
//         color.querySelector(".text").innerHTML = "";
//     });

//     switch (user) {
//         case "красный":
//             const redLight = document.querySelector(".red");
//             redLight.style.backgroundColor = "red";
//             redLight.querySelector(".text").innerHTML = "STOP";
//             break;
//         case "желтый":
//             const yellowLight = document.querySelector(".yellow");
//             yellowLight.style.backgroundColor = "yellow";
//             yellowLight.querySelector(".text").innerHTML = "WAIT";
//             break;
//         case "зеленый":
//             const greenLight = document.querySelector(".green");
//             greenLight.style.backgroundColor = "green";
//             greenLight.querySelector(".text").innerHTML = "GO";
//             break;
//         default:
//             alert("Неверный ввод!");
//     }
// }

// window.onload = () => changeColor()


// 2.ЗАДАЧА
// const button = document.querySelector('#button')
// const text = document.querySelector('#text')
// let counter = 0

// button.onclick = () => {
//     const user = prompt('Введите текст:')
//     if (user) {
//         text.textContent = `Кол-во текст ${counter + 1}: ${user}`
//         counter++
//     }
// }




// 1.ЗАДАЧА
// const valueElement = document.querySelector("#value");
// const decrementButton = document.querySelector("#decrement");
// const incrementButton = document.querySelector("#increment");
// let value = 0;

// decrementButton.onclick = () => {
//     if (value > 0) {
//         value--;
//         updateValue();
//     }
// };

// incrementButton.onclick = () => {
//     value++;
//     updateValue();
// };

// const updateValue = () => {
//     valueElement.textContent = value;
//     if (value > 0) {
//         valueElement.style.color = "green";
//     } else if (value === 0) {
//         valueElement.style.color = "black";
//     } else {
//         valueElement.style.color = "red";
//     }
// }