const {writeFileSync} = require('fs');

for(let i = 0 ;i< 10000;i++){
    writeFileSync('./content/big.txt',`hello world ${i}\n`,{encoding:'utf8',flag:'a'})
}