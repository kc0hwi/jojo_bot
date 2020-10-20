const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {randomSubreddits} = require('../config/subreddits.js')




module.exports = {
    name: 'random',
    description: 'Random!',
    async execute(msg, args, channel) {
        const linkText = randomSub(randomSubreddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}
