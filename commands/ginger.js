const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {gingerReddits} = require('../config/subreddits.js')




module.exports = {
    name: 'ginger',
    description: 'Ginger!',
    async execute(msg, args, channel) {
        const linkText = randomSub(gingerReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}
