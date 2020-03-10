const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission for that.");

    if(!args[0]) return message.reply("!clear <Enter a number>");

    if(Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0){
                message.channel.send(`enter a number above 1.`)

            } else if (args[0] == 1){
                message.channel.send(`You have deleted ${args[0]} message.`).then(msg => msg.delete(3000))
            }
            else{

            message.channel.send(`You have deleted ${args[0]} messages.`).then(msg => msg.delete(3000))
            }
        });

    } else {
        return message.reply("Enter a number");
    }

}

module.exports.help = {
    name: "clear",
    description: "emptying a chat eg <prefix>clear amount"
}