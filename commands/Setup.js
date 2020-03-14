const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var botname = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!botname) return message.channel.send("<prefix>setup (New bot name)");
    message.guild.members.get(bot.user.id).setNickname(botname)
}

module.exports.help = {
    name: "setup",
    description: "for setup the bot"
}