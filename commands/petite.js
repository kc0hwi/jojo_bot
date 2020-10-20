const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {petiteReddits} = require('../config/subreddits.js')



module.exports = {
    name: 'petite',
    description: 'Petite!',
    async execute(msg, args, channel) {
        const linkText = randomSub(petiteReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

