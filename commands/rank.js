const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have access to this command");
    let roleName = args.join(" ").slice(22);

    if(!roleName) return message.channel.send("<prefix>rank (Name) (roll)");

    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    // let membersWithRole = message.guild.members.filter(member => { 
    //     return member.roles.find("name", roleName);
    // }).map(member => {
    //     return member.user.username;
    // })

if(!membersWithRole) return message.channel.send("roll not found");
    let rolembed = new discord.RichEmbed()
        .setTitle(`**${Userroll} heeft succesvol de rol ${roleName}**`)
        //.setDescription(`Users with the ${roleName} role`)
        .setColor(0xFFFF);


    message.channel.send(rolembed);
    return Userroll.addRole(membersWithRole);
}

module.exports.help = {
    name: "rank",
    description: "for give a rank(only for owner)"
}