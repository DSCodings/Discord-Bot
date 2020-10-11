const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!Userroll) return message.reply("Couldn't find that user!");
    
    var muteRole = message.guild.roles.find("name", "Muted");

    Userroll.addRole(muteRole);
    
    var stringEmbed = new discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle("**Promotie!**")
      .setDescription(`${args[0]} heeft suc6 vol de rank legale rijder gekregen.`)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);
    

    message.channel.send(stringEmbed);
   
    
}

module.exports.help = {
    name: "geslaagd",
    description: "Promotie"
}