const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.authorh.roles.has == "Peepsman Founders") {
        return message.reply("Je hebt de rol niet.")
    }
    

   
    
}

module.exports.help = {
    name: "Promotie",
    description: "Promotie"
}