const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var reason = args.join(" ").slice(22);
    console.log(reason)
    if (!reason) return message.channel.send("give a text");
    message.channel.bulkDelete(1)
    message.channel.send(reason)

}

module.exports.help = {
    name: "say",
    description: "for say someting"
}