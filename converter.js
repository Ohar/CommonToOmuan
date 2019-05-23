const fs = require('fs')

const dictCommonToOmuan = require('./constants/dictCommonToOmuan')

const textInCommonFileName = 'text-in-common.txt'
const textInCommonClearedFileName = 'text-in-common-cleared.txt'
const textInOmuanFileName = 'text-in-omuan.txt'

const textInCommonCleared = fs
    .readFileSync(`./${textInCommonFileName}`)
    .toString()
    .trim()
    .toLowerCase()
    .replace(
        /[,\.\-]/g,
        ' '
    )

const textInOmuan = textInCommonCleared
    .split('\n')
    .map(
        paragraph => paragraph
            .replace(
                /\s+/g,
                ' '
            )
            .split('')
            .map(
                letter => letter === ' '
                    ? letter
                    : dictCommonToOmuan[letter]
            )
            .join('')
    )
    .join('\n')

fs.writeFileSync(`./${textInOmuanFileName}`, textInOmuan)
fs.writeFileSync(`./${textInCommonClearedFileName}`, textInCommonCleared)
