const {postImage} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')


module.exports = {
    name: 'bilbo',
    description: 'Bilbo!',
    async execute(msg, args) {
        const url = `https://www.reddit.com/r/ScaryBilbo/hot.json`
        const image = await getNSFW(url) 
        postImage(msg.channel, image)
    }
}

