const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var nicknameEmbed =  new discord.RichEmbed()
      .setDescription("usercount")
      .setColor("#29e53f")
      .setThumbnail(message.guild.iconURL)
      .addField("Membres:", message.guild.memberCount, message.memberCount.name)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(nicknameEmbed);
}

module.exports.help = {
    name: "usercount",
    description: "for see the users"
}