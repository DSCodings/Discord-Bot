const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var botname = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");
    if (!botname) return message.channel.send("<prefix>setup (New bot name)");
    message.guild.members.get(bot.user.id).setNickname(botname);

    var setupEmbed =  new discord.RichEmbed()
      .setDescription("bot name successful changed")
      .setColor("#29e53f")
      .setThumbnail(Icon)
      .addField("Bot name successful changed to:", botname)
      .addField("Do <prefix>help for more commands",)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(setupEmbed);


}

module.exports.help = {
    name: "setup",
    description: "for setup the bot"
}