const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.authorh.roles.has == "Peepsman Founders") {
        return message.reply("Je hebt de rol niet.");
    }
    message.reply("succes");
   // let Grole = message.mentions.roles.first();

    
   // if(!Grole) return message.reply("Couldn't find that role.");

   // Userroll.addRole(Grole);

    

   
    
}

module.exports.help = {
    name: "Promotie",
    description: "Promotie"
}