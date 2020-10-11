const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    var Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!Userroll) return message.reply("Couldn't find that user!");
    var roleName = args.join(" ").slice(22);
    console.log(roleName);
    if(!roleName) return message.channel.send("<prefix>Promotie (Name) (roll)");
    

    Userroll.addRole("Muted");
    

   
    
}

module.exports.help = {
    name: "Promotie",
    description: "Promotie"
}