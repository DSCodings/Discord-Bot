const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    return message.channel.send("This command don't works.")
    //message.channel.send(count);
    //var first = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    // if (!args[0]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[1]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[2]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[3]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[4]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[5]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[6]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[7]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[8]) return message.channel.send("Geef 10 Getallen mee");
    // if (!args[9]) return message.channel.send("Geef 10 Getallen mee");
    var second = args[1];
    var firsssst = args[0];
    
    
    console.log(firsssst);
    console.log(second);
    
    var geennaam = Number(firsssst) + Number(second) + Number(args[2]);
    message.channel.send(geennaam);

   
    
}

module.exports.help = {
    name: "som",
    description: "for make a som"
}