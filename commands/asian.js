const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {asianReddits} = require('../config/subreddits.js')


module.exports = {
    name: 'asian',
    description: 'Asian!',
    async execute(msg, args, channel) {
        const linkText = randomSub(asianReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

