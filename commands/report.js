const discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
    
    var prefix = botconfig.prefix;

    if (!args[0]) return message.channel.send(`Use the command as follows: ${prefix} report username reasons`);

    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send("Player cannot be found / please register a player.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Please provide a reason.");
    
    var reportEmbed = new discord.RichEmbed()
    .setDescription("Reports")
    .setColor("ff0000")
    .addField("Reported user", `${user} with ID ${user.id}`)
    .addField("Report through", `${message.author} with the ID ${message.author.id}`)
    .addField("reason", reason)
    .setFooter(message.createdAt)
    .setFooter('Mady by jan0de0man', message.guild.iconURL);

var channelReport = message.guild.channels.find("name", "logs");
if (!channelReport) return message.channel.send("Kan het kanaal niet vinden");

// ZORG VOOR ADMINISTRATOR RECHTEN OP BOT.
message.delete();

return channelReport.send(reportEmbed);
    
}

module.exports.help = {
    name: "report",
    description: "report someone(only for administator)"
}