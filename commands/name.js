const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.guild.fetchAuditLogs({type: 'MEMBER_UPDATE', user: 'DESIRED USER ID'}).then(async (audit) => {
        let log = audit.entries.first().changes
        console.log(log)
    });
}

module.exports.help = {
    name: "names",
    description: "for see the history of your names"
}