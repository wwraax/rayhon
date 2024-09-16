// var a = 5;

// {
//     let a = 10;
//     console.log(a);
// }

// // const b = 10;

// console.log(a);

// const fun = (a = 5, b = 10) => {
//     return a + b;
// }

// console.log(fun(1));

// alert(fun())
// console.log(fun());
// document.write(fun())

// func()

// function func() {
//     console.log(1 + 5);
// }

// const spread = (...args) => {
//     console.log(args);
// }

// spread(1, 5, 6, 8, 6);

// function foo() {
//     return [1, 2, 3]
// }

// let arr = foo();

// let [a, b, c] = foo();
// console.log(a, b, c);

// Деструктуризация массивов и объектов
// const arr = () => {
//     return [1, 'lerfe', 3, [1,2], 8]
// }

// let [a, b, c, d, e] = arr();
// console.log('Number', a);
// console.log('Number', e);
// console.log('Number', d);

const obj = () => {
    return {
        a: 1,
        b: 2,
        c: 3,
    }
}

let { a: x, b: t, c: l }= obj();
// let [x, m, k] = obj();

console.log(x);
console.log(t);
console.log(l);
console.log(`Цифра: ${x} fdf`);





