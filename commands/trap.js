const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {trapReddits} = require('../config/subreddits.js')



module.exports = {
    name: 'trap',
    description: 'Trap!',
    async execute(msg, args, channel) {
        const linkText = randomSub(trapReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

