const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {gothReddits} = require('../config/subreddits.js')




module.exports = {
    name: 'goth',
    description: 'Goth!',
    async execute(msg, args, channel) {
        const linkText = randomSub(gothReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}
