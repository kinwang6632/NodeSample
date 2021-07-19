const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response',(name,id) => {
    console.log(`data recived ${name} with id:${id}`);
})
CustomEmitter.on('response',() => {
    console.log(`some data logic here`);
})

CustomEmitter.emit('response','john',34)