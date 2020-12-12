const discord = require('discord.js') // Requiring Discorrd.js in our project
const Client = new discord.Client({ws: {intents: discord.Intents.ALL}}) // We need to enable the intents to actually reacive the data when someone joins
Client.commands = new discord.Collection()
Client.aliases = new discord.Collection()
Client.on('ready', () => {  // This is triggered when the bot is online
console.log('Ready to server') // This is logged
const loader = require('./handler/command-loader')
loader(Client)
})

Client.on('message', message => { // Gets triggered when a message is sent
 const msg = require('./events/message')
 msg(Client, message)
})
Client.on('guildMemberAdd', (member) => {
    const chan = member.guild.channels.cache.find(r => r.name === 'welcome')
    chan.send(`Welcome <@${member.id}>`)
})
Client.login('Nzg1NDU0MzE0MDcxNjU0NDMy.X84FVQ.S043_Y7ZdenuCwixqlYIQw5XNAI') // This is bsically the password
