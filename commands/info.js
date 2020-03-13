const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    var botIcon = bot.user.displayAvatarURL;
    
    var botEmbed =  new discord.RichEmbed()
      .setDescription("discord bot info")
      .setColor("#29e53f")
      .setThumbnail(botIcon)
      .addField("Bot name", bot.user.username)
      .addField("made on", bot.user.createdAt)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info",
    description: "gives info of the bot"
}