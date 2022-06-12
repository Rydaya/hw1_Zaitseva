//Ex 1

const name1 = 'Andrew';
const name2 = 123;
const name3 = [];

function checkType(name) {
    if (typeof name === 'string') {
        return 'Hello ' + name;
    }
    return 'Ошибка, не тот тип данных';
}

console.log(checkType(name1));
console.log(checkType(name2));


//Ex 2

console.log(typeof (1));
console.log(typeof (123455644333n));
console.log(typeof ('a'));
console.log(typeof ([1, 2, 3]));
console.log(typeof (checkType)); // функция это объектный тип, но typeof ее идентефицирует
console.log(typeof (true));
console.log(typeof (null)); // спец значение, но из-за ошибки typeof возвращает object
console.log(typeof (undefined));
console.log(typeof (Symbol('id')));