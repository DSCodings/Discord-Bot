const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    return message.channel.send("Test is suc6vol gelukt!");
}

module.exports.help = {
    name: "whois",
    description: "for userinfo"
}