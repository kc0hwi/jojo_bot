const {postImage} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')


module.exports = {
    name: 'glorp',
    description: 'Glorp!',
    async execute(msg, args) {
        const url = `https://www.reddit.com/r/Glorp/hot.json`
        const image = await getNSFW(url) 
        postImage(msg.channel, image)
    }
}

