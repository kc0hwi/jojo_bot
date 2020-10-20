module.exports = {
    name: 'ping',
    description: 'Ping!',
    async execute(msg, args) {
        msg.reply('pong')
        msg.channel.send('pong')
    }
}