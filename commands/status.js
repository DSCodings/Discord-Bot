const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");
    if (!args[0]) return message.reply("Geef alles mee!");
    bot.user.setstatus(args[1]);
}

module.exports.help = {
    name: "status",
    description: "for change the status"
}