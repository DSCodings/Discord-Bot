const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.channel.send("Gebruik: sps <steen> <papier> <schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0] == "steen"){
        if(result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:, ik win`);
        } else if(result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, jij win`);
        } else if(result == "steen"){
            message.channel.send(`Ik heb ${result} :moyai:, Het is gelijkspel`);
        }
    }
    else if (args[0] == "papier"){
        if(result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, ik win`);
        } else if(result == "steen"){
            message.channel.send(`Ik heb ${result} :moyai:, jij win`);
        } else if(result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:, Het is gelijkspel`);
        }
    }
    else if (args[0] == "schaar"){
        if(result == "steen"){
            message.channel.send(`Ik heb ${result} :moyai:, ik win`);
        } else if(result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:, jij win`);
        } else if(result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, Het is gelijkspel`);
        }
    }
}

module.exports.help = {
    name: "sps",
    description: "for to play the game: rock paper scissors"
}