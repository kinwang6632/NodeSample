const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const path = require('path')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWSOME:${first}
        ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

start();

// const getText = (Path) => {
//     return new Promise((resolve, reject) => {
//         readFile(Path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


// getText('./content/first.txt').then(
//     result => console.log(result)
// ).catch((err) => {
//     console.log(err);
// })