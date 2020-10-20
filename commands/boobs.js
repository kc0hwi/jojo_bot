const {postImage, randomSub} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')
const {boobReddits} = require('../config/subreddits.js')



module.exports = {
    name: 'boobs',
    description: 'Boobs!',
    async execute(msg, args, channel) {
        const linkText = randomSub(boobReddits)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

