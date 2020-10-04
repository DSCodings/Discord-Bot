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
      .addField("Bots", message.guild.members.filter(member => member.user.bot).size)
      .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
      .addField("Your name:", `${message.author.username}#${message.author.discriminator}`)
      .addField("Your id:", message.author.id)
      .addField("Channals", message.guild.channels.size)
      .addField("roles", message.guild.roles.size)
      .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "serverinfo",
    description: "Provides the info about the server"
}