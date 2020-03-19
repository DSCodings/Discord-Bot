const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var Icon = message.guild.iconURL;
    
    if (!user.roles) {
    user.roles = [ ];
    }
    
    
    
    var serverEmbed =  new discord.RichEmbed()
      .setDescription("Userinfo")
      .setColor("#29e53f")
      .setThumbnail(Icon)
      .addField("Bot name", bot.user.username)
      .addField("you are joined on", message.member.joinedAt)
      .addField('Roles:', user.roles ? user.roles.map(r => `${r}`).join(' | ') : "", true)
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "userinfo",
    description: "for test the bot"
}