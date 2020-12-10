const discord = require('discord.js') // Requiring Discorrd.js in our project
const Client = new discord.Client({ws: {intents: discord.Intents.ALL}}) // We need to enable the intents to actually reacive the data when someone joins

Client.on('ready', () => {  // This is triggered when the bot is online
console.log('Ready to server') // This is logged
})

Client.on('message', message => { // Gets triggered when a message is sent
    console.log(message.content) // Logs the message
    if(message.content === "ping"){
        message.reply('Pong!') // Reply if the message content is ping
    } // Checks if the message content is ping
    if(message.content === "owner") {
        message.reply('My owner is apache')
    }
    if(message.content === "hello"){
        message.reply('hi')
    }
})
Client.on('guildMemberAdd', (member) => {
    const chan = member.guild.channels.cache.find(r => r.name === 'welcome')
    chan.send(`Welcome <@${member.id}>`)
})
Client.login('Enter ur token here') // This is bsically the password
