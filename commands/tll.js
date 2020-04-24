const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send(count);
    var first = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));
    if (!args[0]) return message.channel.send("Geef een argument mee");
    if (!args[1]) return message.channel.send("Geef een argument mee");
    var count = 10 + 10;
    message.channel.send(count);
    message.channel.send("testendingtesten");
    return message.channel.send(first + ars[1]);
    
}

module.exports.help = {
    name: "som",
    description: "for make a som"
}