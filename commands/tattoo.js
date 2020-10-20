const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {tattooReddits} = require('../config/subreddits.js')




module.exports = {
    name: 'tattoo',
    description: 'Tattoo!',
    async execute(msg, args, channel) {
        const linkText = randomSub(tattooReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

