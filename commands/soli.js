const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const categoryId = "667393377020411916";

    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("Je hebt al een ticket aangemaakt");
 
            bool = true;
 
        }
    });

    if (bool == true) return;
    var embedCreateTicket = new discord.RichEmbed()
        .setDescription("ticket")
        .setTitle("hi, " + message.author.username)
        .setFooter(`You have created a ticket.`);

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { // Maak kanaal
        createdChan.setParent(categoryId).then((settedParent) => { // Zet kanaal in category. 
            // Zet perms voor iedereen
            settedParent.overwritePermissions(message.guild.roles.find('name', "Support team"), { 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true 
            });

            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
            // Zet perms voor de gebruiker die ticket heeft aangemaakt.
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
            });
            var embedParent = new discord.RichEmbed()
                .setTitle("Hoi, " + message.author.username.toString())
                .setDescription("Beantwoor de onderstaande vragen: \n 1. Hoe oud ben jij? \n 2. Hoe vaak kom je online? \n 3. Ben je nog ergens anders staf? \n 4.vertel iets over jezelf.");
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Something went wrong.");
        });
    }).catch(err => {
        message.channel.send("Something went wrong.");
    });
    



}

module.exports.help = {
    name: "soli",
    description: "creates a ticket"
}