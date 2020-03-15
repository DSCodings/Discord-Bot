const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
     
            var text = "**Terminal bot** \n\n **__Update Log__** \n -setup added, For setup the bot \n -nickmanechange added \n -update log added \n -usercount added";
      
           // message.author.send(text);
      
            //return message.channel.send("We sent you a DM with information.");

            message.author.send(text).then(() => {
 
                message.channel.send("We sent you a DM with information! :mailbox_with_mail:");
         
            }).catch(() => {
         
                message.channel.send("Your private messages are turned off, you have not received any help, pls turn in on.");
         
            });
      
          
            
         //return message.channel.send("error");
      
      
          
}

module.exports.help = {
    name: "update",
    description: "for see the update logs."
}
