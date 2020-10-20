require('dotenv').config();
const schedule = require('node-schedule')

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection()
const botCommands = require('./commands')

const {postImage, randomSub} = require('./utilities/helpers.js')
const getNSFW = require('./utilities/getNSFW.js')
const {randomSubreddits} = require('./config/subreddits.js')

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key])
})

const TOKEN = process.env.TOKEN;
bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async msg => {
    const channel = bot.channels.cache.get("425469302309781505")

    const args = msg.content.split(/ +/)
    const command = args.shift().toLowerCase()
    console.info(`Called command: ${command}`)

    if (!bot.commands.has(command)) return

    try {
        await bot.commands.get(command).execute(msg, args, channel)
    } catch (err) {
        console.error(err)
        msg.reply('error trying to execute command')
    }
})

const daily = schedule.scheduleJob('0 00 07 * * *', async function() {
    const channel = bot.channels.cache.get("425469302309781505")

    try {
        const linkText = randomSub(randomSubreddits)
        console.log('Random chosen subreddit: ', linkText)
        const url = `https://www.reddit.com/r/${linkText}/hot.json`
        console.log('Random generated url: ', url)
        const image = await getNSFW(url)
        channel.send("Here is your daily random image")
        channel.send(image)
    } catch(err) {
        console.log(err)
    }
})

