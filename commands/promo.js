const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!Userroll) return message.reply("gebruiken niet gevonden.");

    if (!args[1]) return message.reply("Geef een rijbewijs mee, A, B, C of D.")
    
    var muteRole = message.guild.roles.find("name", "Legale Rijder!");
    if (args[1] == 'A'){
        debug.log("A")
        message.reply("AAA")
    }
    else  if (args[1] == 'B'){
        message.reply("BBBB")
    }
    else  if (args[1] == 'C'){
        message.reply("CCCC")
    }
    else  if (args[1] == 'D'){
        message.reply("DDDD")
    }
    var muteRole1 = message.guild.roles.find("name", "Legale Rijder!");

    Userroll.addRole(muteRole);
    Userroll.addRole(muteRole);
    
    var stringEmbed = new discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle("**Promotie!**")
      .setDescription(`${args[0]} heeft suc6vol rijbewijs ${args[1]} gekregen.`)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);
    

    message.channel.send(stringEmbed);
   
    
}

module.exports.help = {
    name: "geslaagd",
    description: "Promotie"
}