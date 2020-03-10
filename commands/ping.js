const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send("pong: " + (message.createdTimestamp - Date.now()) + "ms")
}

module.exports.help = {
    name: "ping",
    description: "For the speed of the bot to be tested"
}