const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const categoryId = "667393377020411916";
    message.channel.bulkDelete(1);
    if (message.channel.parentID == categoryId) {
 
        message.channel.send("This ticket has claimed by: " + message.author.tag)
 
    } else {
 
        message.channel.send("This is not a ticket.");
 
    }
}

module.exports.help = {
    name: "claim",
    description: "for claim a ticket."
}