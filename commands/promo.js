const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have access to this command");

    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!Userroll) return message.reply("gebruiken niet gevonden.");

    if (!args[1]) return message.reply("Geef een rijbewijs mee, A, B, C of D.")
    
    var muteRole = message.guild.roles.find("name", "Legale Rijder!");
    if (args[1] == 'A'){
        var muteRole1 = message.guild.roles.find("name", "Rijbewijs A (Motor)");
      //  message.reply("AAA");
    }
    else  if (args[1] == 'B'){
        var muteRole1 = message.guild.roles.find("name", "Rijbewijs B (Auto)");
       // message.reply("BBBB");
    }
    else  if (args[1] == 'C'){
        var muteRole1 = message.guild.roles.find("name", "Rijbewijs C (Vrachtwagens)");
     //   message.reply("CCCC");
    }
    else  if (args[1] == 'D'){
        var muteRole1 = message.guild.roles.find("name", "Rijbewijs D (Bus)");
       // message.reply("DDDD");
    }
   // var muteRole1 = message.guild.roles.find("name", "Legale Rijder!");

    Userroll.addRole(muteRole);
    Userroll.addRole(muteRole1);
    
    var stringEmbed = new discord.RichEmbed()
      .setColor("#00FF00")
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