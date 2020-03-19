const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var Icon = message.guild.iconURL;
    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    
    // if (!user.roles) {
    // user.roles = [ ];
    // }
    
    
    
    let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.guild.author;
}

const member = message.guild.member(user);

const embed = new discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Joined The Server On:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Account Created On:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
    .addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true)
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)


    return message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    description: "for see the info from the user"
}