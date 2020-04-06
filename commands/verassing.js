const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    return message.channel.send("you are been hacked.");
}

module.exports.help = {
    name: "??",
    description: "(no info)"
}