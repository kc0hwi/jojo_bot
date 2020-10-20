const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {flashReddits} = require('../config/subreddits.js')




module.exports = {
    name: 'flash',
    description: 'Flash!',
    async execute(msg, args, channel) {
        const linkText = randomSub(flashReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

