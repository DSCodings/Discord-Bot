const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't do it");
    var giveawayEmbedgg = new discord.RichEmbed()
        .setTitle("**check**")
        .setFooter('Mady by jan0de0man', message.guild.iconURL)
        .setTimestamp();
        var embedSendq = await message.channel.send(giveawayEmbedgg);
        embedSendq.react("👍");

        // message.channel.send(giveawayEmbedgg);
        // giveawayEmbedgg.react('👍');

        // if (message.content === '!react') {
        //     message.react('👍');
        // }
        if (reaction.emoji.name === '👍') {
               message.reply('you reacted with a thumbs up.');
          }



}

module.exports.help = {
    name: "actief",
    description: "for say hello."
}