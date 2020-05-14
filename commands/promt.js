const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't do it");
    var giveawayEmbedgg = new discord.RichEmbed()
        .setTitle("**check**")
        .setFooter('Mady by jan0de0man', message.guild.iconURL)
        .setTimestamp();
        var embedSendq = await message.channel.send(giveawayEmbedgg);
        embedSendq.react("👍", "👎");

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        // message.channel.send(giveawayEmbedgg);
        // giveawayEmbedgg.react('👍');

        // if (message.content === '!react') {
        //     message.react('👍');
        // }
        // if (reaction.emoji.name === '👍') {
        //        message.reply('you reacted with a thumbs up.');
        //   }
    message.awaitReactions(filter, { max: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, time: 10, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('you reacted with a thumbs up.');
		} 
	}).catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});



}

module.exports.help = {
    name: "actief",
    description: "for say hello."
}