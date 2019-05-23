const dict = require('./dict')

const dictCommonToOmuan = dict.reduce(
    (result, {common, omuan}) => ({
        ...result,
        [common]: omuan,
    }),
    {}
)

module.exports = dictCommonToOmuan
