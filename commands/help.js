const {postImage} = require('../utilities/helpers.js')
const getNSFW = require('../utilities/getNSFW.js')



module.exports = {
    name: 'help',
    description: 'Help!',
    async execute(msg, args, channel) {
        const commandList = [
            "List of currently supported keywords: ", 
            "asian",
            "ass",
            "bilbo", 
            "boobs", 
            "flash", 
            "ginger",
            "glorp", 
            "goth",
            "horse",
            "meme", 
            "petite", 
            "pipis",
            "random",
            "rule34", 
            "tattoo", 
            "trap (damnit Jojo)"
        ]
        msg.reply(commandList)



    }
}

