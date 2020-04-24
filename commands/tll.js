const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send(count);
    //var first = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if (!args[0]) return message.channel.send("Geef een argument mee");
    if (!args[1]) return message.channel.send("Geef een argument mee");
    var second = args[1]
    var firsssst = args[0]
    var count = 10 + 10;
    message.channel.send(count);
    message.channel.send("testendingtesten");
    var somsin = firsssst + second
    return message.channel.send(somsin);
    
}

module.exports.help = {
    name: "som",
    description: "for make a som"
}