const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!Userroll) return message.reply("Couldn't find that user!");
    
    

    Userroll.addRole("Muted");
    

   
    
}

module.exports.help = {
    name: "Promotie",
    description: "Promotie"
}