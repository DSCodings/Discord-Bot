const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
    // try{
    //     var text = "**Terminal bot** \n\n **__Commands__** \n !Ban - ban a specific person(only for administator) \n !kick - kicks a certain person (only for administator)";
  
    //     message.author.send(text);
  
    //     return message.channel.send("We sent you a DM with information.");
  
    //   }catch (error){
        
    //     return message.channel.send("error");
  
  
    //   }

    var commandsList = [];
 
    bot.commands.forEach(command => {
 
        var item = {
 
            name: command.help.name,
            description: command.help.description //,
            // category: command.help.category
 
        }
 
        commandsList.push(item);
 
    });
 
    // console.log(commandsList);
 
    var prefix = botConfig.prefix;
    var response = "";
 
    for (var i = 0; i < commandsList.length; i++) {
 
        response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \r\n`;
 
    }
 
    message.author.send(response).then(() => {
 
        message.channel.send("We sent you a DM with information! :mailbox_with_mail:");
 
    }).catch(() => {
 
        message.channel.send("Your private messages are turned off, you have not received any help, pls turn in on.");
 
    });
}
module.exports.help = {
    name: "help",
    description: "provides a help menu"
}