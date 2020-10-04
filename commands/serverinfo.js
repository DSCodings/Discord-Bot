const discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
    var Icon = message.guild.iconURL;
    
    
    
    var serverEmbed =  new discord.RichEmbed()
      .setDescription("Server info")
      .setColor("#29e53f")
      .setThumbnail(Icon)
      .addField("Bot name", bot.user.username)
      .addField("you are joined on", message.member.joinedAt)
      .addField("members", message.guild.memberCount)
      .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField("Your name:", `${message.author.username}#${message.author.discriminator}`)
      .addField("Your id:", message.author.id)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Provides the info about the server"
}