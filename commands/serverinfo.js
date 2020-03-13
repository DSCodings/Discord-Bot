const discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
    var Icon = message.guild.iconURL;
    
    
    
    var serverEmbed =  new discord.RichEmbed()
      .setDescription("Server info")
      .setColor("#29e53f")
      .setThumbnail(Icon)
      .addField("Bot naam", bot.user.username)
      .addField("you are joined on", message.member.joinedAt)
      .addField("membres", message.guild.memberCount)
      .setFooter('Mady by jan0de0man', Icon);


    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Provides the info about the server"
}