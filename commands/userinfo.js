const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    let userinfo = {};
    userinfo.avatar = user.displayAvatarURL();
    userinfo.name = user.username;
    userinfo.discrim = `#${user.discriminator}` ;
    userinfo.id = user.id;
    userinfo.status = user.presence.status;
    userinfo.regostered = moment.utc(m.guild.member.get(user.id).joinedAt).format("dddd, MMMM Do. YYYY");
    

    
    let embed = new discord.RichEmbed()
        .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL) //This will show the users tag and avatar - there was no need to stringify that text :P
        .addField('Account Created', memberToFind.user.createdAt, true) //Shows when the user was registered
        .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true) //Shows when the user joined the guild
        .addField('User ID', memberToFind.id, true) //Shows the user ID
        .setColor(0xffffff) //Make the embed white
        .setFooter('Searched User') //Add a footer
        .setTimestamp() //Timestamp the footer
 
    message.channel.send(embed); //Send the embed we just created
    
}

module.exports.help = {
    name: "whios",
    description: "for test the bot"
}