const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {rule34Reddits} = require('../config/subreddits.js')


module.exports = {
    name: 'rule34',
    description: 'Rule34!',
    async execute(msg, args, channel) {
        const linkText = randomSub(rule34Reddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

