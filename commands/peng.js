module.exports = {
    name: 'peng',
    description: 'Peng!',
    execute(msg, args) {
        msg.reply('pung')
        msg.channel.send('pung')
    }
}