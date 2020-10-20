
const {postImage} = require('../utilities/helpers.js')



module.exports = {
    name: 'pipis',
    description: 'Pipis!',
    async execute(msg, args, channel) {
        const url = `https://www.youtube.com/watch?v=DbJm2kegNck`

        channel.send(url)


    }
}
