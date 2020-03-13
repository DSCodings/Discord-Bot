const discord = require("discord.js");
//const fs = require("fs");

module.exports.run = async(bot, message, arguments) => {
    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("use was not found");

    var reason = arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't kick this user.");


    var icon = bot.user.displayAvatarURL;

    
    var kick = new discord.RichEmbed()
        .setDescription("kick")
        .setColor("#f0982e")
        .setThumbnail(icon)
        .addField("kicked user", kickUser)
        .addField("kicked by", message.author)
        .addField("reason", reason)
        .setTimestamp()
        .setFooter('Mady by jan0de0man', message.guild.iconURL);

    var kickchannel = message.guild.channels.find(`name`, "logs");
    if(!kickchannel) return message.guild.send("Cannot find the channel");

    message.guild.member(kickUser).kick(reason); 

    kickchannel.send(kick);

    return;
}

module.exports.help = {
    name: "kick",
    description: "kick a specific person(only for administator)"
}