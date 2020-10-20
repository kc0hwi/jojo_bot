const {postImage} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')



module.exports = {
    name: 'horse',
    description: 'Horse!',
    async execute(msg, args, channel) {
        const url = `https://www.reddit.com/r/Horses/hot.json`
        const image = await getNSFW(url)

        channel.send(image)


    }
}

