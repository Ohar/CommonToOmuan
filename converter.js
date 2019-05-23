const text = require('./text.txt')

const dict = require('./constants/dict')
const dictCommonToOmuan = require('./constants/dictCommonToOmuan')
const dictOmuanToCommon = require('./constants/dictOmuanToCommon')

text
    .trim()
    .toLowerCase()
    .replace(
        /\s+/g,
        ' '
    )
