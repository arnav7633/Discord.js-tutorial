const prefix = "!"
module.exports = async(client, message) =>{
    if(message.channel.type === "dm") return
    if(message.author.bot) return
    if(!message.content.toLowerCase().startsWith('!')) return
    const args = message.content.slice(prefix.length).trim().split(/ + /g)
    const cmd = args.shift().toLowerCase()
    const com = cmd.replace(/ .*/,'');
    const command = client.commands.get(com) || client.aliases.get(com)
    if(command) {
        command.run(client, message, args)
    }
}
