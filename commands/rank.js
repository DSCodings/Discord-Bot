const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have access to this command");
    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));
    if(!Userroll) return message.reply("Couldn't find that user!");
    var roleName = args.join(" ").slice(22);
    console.log(roleName);
    if(!roleName) return message.channel.send("<prefix>rank (Name) (roll)");

    
    let Grole = message.guild.members.filter(member => { 
        return member.roles.find(role => role.name === roleName);
    }).map(member => {
        return member.user.username;
    })
    //("name", roleName);
    //let Grole = message.guild.roles.find(role => role.name === roleName);
    console.log(message.guild.roleName);
    console.log(message.guild.roles.name);
    console.log(message.guild.roles.first.name);
    console.log(Grole);
    
    if(!Grole) return message.reply("Couldn't find that role.");

    Userroll.addRole(Grole).catch(message.reply("Can't give that roll!"));
  

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    // let membersWithRole = message.guild.members.filter(member => { 
    //     return member.roles.find("name", roleName);
    // }).map(member => {
    //     return member.user.username;
    // })

    let rolembed = new discord.RichEmbed()
        .setTitle(`**${Userroll} heeft succesvol de rol ${roleName}**`)
        //.setDescription(`Users with the ${roleName} role`)
        .setColor("0xFFFF")
        .setTimestamp()
        .setFooter('Mady by jan0de0man', message.guild.iconURL);


    message.channel.send(rolembed);
    return
}

module.exports.help = {
    name: "rank",
    description: "for give a rank(only for owner)"
}