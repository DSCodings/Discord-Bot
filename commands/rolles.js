const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let roleName = message.content.split(" ").slice(1).join(" ");

    if(!roleName) return message.channel.send("<prefix>userrolcount (roll)");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })

    let rolembed = new discord.RichEmbed()
        .setTitle(`Users with the ${roleName} role`)
        .setDescription(membersWithRole.join("\n"))
        .setColor(0xFFFF);


    return message.channel.send(rolembed);
}

module.exports.help = {
    name: "userrolcount",
    description: "for test the bot"
}