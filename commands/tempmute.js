const discord = require("discord.js");
const ms =  require("ms");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members(args[0]));

    if (!user) return message.channel.send("Specify a user.");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't mute this user.");

    var muteRole = message.guild.roles.find("name", "muted");
    
    //if(!user) return message.channel.send("Specify a user.");

    if(!muteRole) return message.channel.send("c'ant find this channel.");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Specify a time.");

    await (user.addRole(muteRole.id));

    message.channel.send(`${user} is muted for ${muteTime}`);

    setTimeout(function () {
        user.removeRole(muteRole.id);

        message.channel.send(`${user} is geuntmuted.`)
    });


    
}

module.exports.help = {
    name: "tempmute",
    description: "mute someone for a while (only for administrator)"
}