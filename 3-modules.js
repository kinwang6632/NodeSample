/*
const amount = 12
const names = require('./1-module')
if (amount < 10) {
    console.log('small number')
} else {
    console.log('large number')
}
console.log(names)

console.log(__dirname)
console.log(__filename)

names.sayHi('kin')
var o = names.sayHi2("AAA")
console.log(o)
const p = new Promise((resolve,reject)=>{
    //var p = Promise
    //resolve(`enter into promis`)
    reject(`I am not ok`)
})
p
.then((m)=>{
    console.log(`promise is ok =>${m}`)
})
.then(()=>{
    console.log(`promise is ok2`)
})
.then(()=>{
    console.log(`promise is 'ok'`)
})
.catch((m) =>{
    console.log(`promise is failure => ${m}`)
})

function test1() {
    setTimeout(() => {
        console.log(`test1`)
        return  Promise.resolve();
        
    }, 3000);
}
function test2() {
    console.log(`test2`)
    return  Promise.resolve()
    
}
async function runasync() {
    await test1
    await test2
    
    console.log(`finish`)
}
runasync() */

const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// console.log(data.items[0])

// sayHi(`kin`)
// sayHi(names.jhon)
// sayHi(names.peter) 
require('./7-mind-grenade')
