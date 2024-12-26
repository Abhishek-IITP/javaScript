// let str='snsks';
let x= {};
// if(str.__proto__.__proto__===x.__proto__){
//     console.log('sahi h')
// }
// else('glt h')
x.__proto__.print=function(){
    console.log('first')
}
console.log(x.__proto__)