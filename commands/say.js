const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if (!user) return message.channel.send("give a text");
    message.channel.bulkDelete(1)
    message.channel.send(user)

}

module.exports.help = {
    name: "say",
    description: "for say someting"
}