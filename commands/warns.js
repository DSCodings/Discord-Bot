const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members(args[0]));

    if(!user) return message.channel.send("Specify a user.");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("you can't warn this user.");

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send("!warn <Enter a reason>");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
        if (err) Console.log(err);

    })

    var icon = bot.user.displayAvatarURL;

    var warnEmbed = new discord.RichEmbed()
        .setDescription("warn")
        .setColor("#f0982e")
        .setThumbnail(icon)
        .addField("warn user", user)
        .addField("warned by", message.author)
        .addField("number of warns", warns[user.id].warns)
        .addField("reason", reason)
        .setFooter('Mady by jan0de0man', message.guild.iconURL);

    var warnchannel = message.guild.channels.find(`name`, "logs");
    if(!warnchannel) return message.guild.send("Cannot find the channel");

    warnchannel.send(warnEmbed);

    if(warns[user.id].warns == 4){
        var warnbericht = new discord.RichEmbed()
            .setDescription("beware")
            .setColor("#f0982e")
            .setThumbnail(icon)
            .addField("watch out", "1 more warn and you have a ban.")
            .setTimestamp()
            .setFooter('Mady by jan0de0man', message.guild.iconURL);

        message.channel.send(warnbericht);
    }else if (warns[user.id].warns == 5) {
        message.guild.member(user).ban(reason); 
        message.channel.send(`${user} is banned!!`);

    }


}

module.exports.help = {
    name: "warn",
    description: "for give someone a warn (only for administrator)"
}