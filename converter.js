const fs = require('fs')

const dictCommonToOmuan = require('./constants/dictCommonToOmuan')

const textFileName = 'text.txt'

const omuan = fs
    .readFileSync(`./${textFileName}`)
    .toString()
    .trim()
    .toLowerCase()
    .replace(
        /[,\.\-]/g,
        ' '
    )
    .replace(
        /\s+/g,
        ' '
    )
    .split('')
    .map(
        letter => letter
            ? dictCommonToOmuan[letter]
            : ' '
    )
    .join('')

console.log('omuan', omuan);
