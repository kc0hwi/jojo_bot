const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {assReddits} = require('../config/subreddits.js')



module.exports = {
    name: 'ass',
    description: 'Ass!',
    async execute(msg, args, channel) {
        const linkText = randomSub(assReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

