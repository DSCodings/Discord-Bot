const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have access to this command");

    if (!args[0]) return message.reply("!prefix <prefix here>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
      prefix: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err);
    });

    var stringEmbed = new discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle("prefix")
      .setDescription(`Prefix adjusted to ${args[0]}`);
    //.setThumbnail(icon);

    message.channel.send(stringEmbed);


}

module.exports.help = {
    name: "prefix12",
    description: "For change the prefix"
}