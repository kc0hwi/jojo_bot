const {getSFW, postImage, randomSub} = require('../utilities/helpers.js')
const {memeReddits} = require('../config/subreddits.js')


module.exports = {
    name: 'meme',
    description: 'Meme!',
    async execute(msg, args) {
        const linkText = randomSub(memeReddits)
        //const subreddit = 'memes'
        const image = await getSFW(linkText)
        console.log(image)
        postImage(msg.channel, image)
    }
}