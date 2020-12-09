const discord = require('discord.js') // Requiring Discorrd.js in our project
const Client = new discord.Client() // Making a new user

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
Client.login('Nzg1NDU0MzE0MDcxNjU0NDMy.X84FVQ.EcBCAAVMV5JCVOfZSfQ0unN-xUM') // This is bsically the password
