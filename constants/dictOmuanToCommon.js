const dict = require('./dict')

const dictOmuanToCommon = dict.reduce(
    (result, {common, omuan}) => ({
        ...result,
        [omuan]: common,
    }),
    {}
)

module.exports = dictOmuanToCommon
