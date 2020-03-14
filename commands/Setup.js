const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    msg.guild.members.get(bot.user.id).setNickname("NEWNAMEHERE")
}

module.exports.help = {
    name: "setup",
    description: "for setup the bot"
}