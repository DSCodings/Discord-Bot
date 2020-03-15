const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send("pong: " + (Date.now() - message.createdTimestamp) + "ms")
}

module.exports.help = {
    name: "ping",
    description: "For the speed of the bot to be tested"
}