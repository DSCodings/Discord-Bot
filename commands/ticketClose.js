const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const categoryId = "667393377020411916";

    var reason = args.join(" ").slice(22);


    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("This is not a ticket.");
 
    }
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("hi, " + message.channel.name)
        .setDescription("Your ticket is marked as ** complete **. If you want to make a new one, do <prefix>Ticket.")
        .setFooter(`You have deleted a ticket.`)
        .setTimestamp()
        .setFooter('Mady by jan0de0man', message.guild.iconURL);
        

        var logChannel = message.guild.channels.find("name", "logs");

        if (!logChannel) return message.channel.send("Channel does not exist.");
 
    
    logChannel.send(embedCloseTicket);
 
    
}

module.exports.help = {
    name: "close",
    description: "closed a ticket"
}