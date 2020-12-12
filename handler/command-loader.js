const {readdirSync} = require('fs')
module.exports = (client) => {
    readdirSync('./commands').map((dir) => {
        readdirSync(`./commands/${dir}/`).map((cmd) => {
            let pull = require(`../commands/${dir}/${cmd}`);
            client.commands.set(pull.name, pull);
            if(pull.aliases) {
                pull.aliases.map((p) => client.aliases.set(p, pull));
            }
        })
    })
}