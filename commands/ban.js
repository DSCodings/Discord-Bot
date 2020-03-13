const discord = require("discord.js");

module.exports.run = async(bot, message, arguments) => {
    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("use was not found");

    var reason = arguments.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't ban this user.");


    var icon = bot.user.displayAvatarURL;

    var ban = new discord.RichEmbed()
        .setDescription("ban")
        .setColor("#ff0000")
        .setThumbnail(icon)
        .addField("baned user", banUser)
        .addField("baned by", message.author)
        .addField("reason", reason)
        .setTimestamp()
        .setFooter('Mady by jan0de0man', message.guild.iconURL);

    var banchannel = message.guild.channels.find(`name`, "logs");
    if(!banchannel) return message.guild.send("Cannot find the channel");

    message.guild.member(banUser).ban(reason); 

    banchannel.send(ban);
}

module.exports.help = {
    name: "ban",
    description: "ban a specific person(only for administator)"
}