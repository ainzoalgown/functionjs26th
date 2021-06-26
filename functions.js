function removeUser() { // i created a function
 alert('user deleted') // she deleted "the user"
}
removeUser()
function createPost () { // message, u now?
}
createPost()
function addItem() {
}
addItem()
function  readFile() {

}
readFile()
function  getElements() {

}
getElements()
function createParentElement() {

}
createParentElement()
function startGame() {

}
function sendMeassage() {
 sendMeassage()
}
sendMeassage()
//task № 2
function  multiplication() {
 console.log(5 * 4) 
}
multiplication()
function  minus() {
 console.log(5 - 4)
}
minus()
function  plus() {
 console.log(4 + 5)
}
plus()
function division() {
 console.log( 5 / 4 )
}
division()
// task № 3
function some(a) {
 return a;
}
//
function body(a) {
 return a;
}
//
function once(a) {
 return a;
}
//
function told(a) {
 return a;
}
//
function me(a) {
 return a;
}
//
function the(a) {
 return a;
}
//
function world(a) {
 return a;
}
//
function isGonna(a) {
 return a;
}
//
function roll(a) {
 return a;
}
//
function me(a) {
 return a;
}
// Task 5
function returnTask1(a) {
 return a * 2;
}
//
function returnTask2(a) {
 return a * 3;
}
//
function returnTask3(a) {
 return a * 4;
}
//
function returnTask4(a) {
 return a * 5;
}
//
function multiplyBy5(a) {
 return a * 6;
}
//Task №5
function getFirst(arr) {
 return arr[0];
}

console.log(getFirst([1, 2, 3, 4]));
//Task №6
function getLast(arr) {
 return arr[arr.length-1];
}

console.log(getLast([1, 2, 3, 4]));
// Task №7
function printMyFullName(firstname, secondname) { //два аргумента
 const fullname = `${firstname} ${secondname}`; // создание переменной, интеполяция,вроде

 return fullname; // переменную вернули
}

console.log(printMyFullName('into', 'code')); // вывод в консоль


function getSumOfFirstAndLastElement(arr) { // появление массива
 if(arr.length < 2) { // тут же все понятно.. ладно короче там если длина меньше 2
  return 'леее, минимум два элемента нужно жи есть'; // то над эту строку
 } else {
  const lastIndex = arr.length - 1; // переменная равна длине массива - 1

  return arr[0] + arr[lastIndex]; // возвращаем первый и и прибавляем к последнему элементу
 }
}

console.log(getSumOfFirstAndLastElement([]); // END

console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]); // END
// Task №8
let text = "css";
// функция возвращает html/в ее функции создается локальная переменная/ближе к return
function testVariableScope() {
 let text = "html";

 return text;
}

console.log(testVariableScope());
// Task №9
// Охаё, Мохьмад-Эмин...

