const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send(count);
    if (!args[0]) return message.channel.send("Geef een argument mee");
    if (!args[1]) return message.channel.send("Geef een argument mee");
    var count = 10 + 10;
    message.channel.send(count);
    return message.channel.send(ars[0] + ars[1]);
}

module.exports.help = {
    name: "som",
    description: "for make a som"
}