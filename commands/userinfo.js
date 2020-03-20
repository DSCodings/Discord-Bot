const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    let userinfo = {};
    //userinfo.avatar = user.author.avatarURL;
    userinfo.name = user.username;
    userinfo.discrim = `#${user.discriminator}` ;
    userinfo.id = user.id;
    userinfo.status = user.presence.status;
    //userinfo.registered = user.member.create //moment.utc(message.guild.member.get(user.id).user.createdAt).format("dddd, MMMM Do. YYYY");
    userinfo.joined = user.joinedAt // ..joinedAt ///moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY")


    
    let embed = new discord.RichEmbed()
        //.setAuthor(user.tag, userinfo.avatar) 
        .setThumbnail(userinfo.avatar)
        .addField('Username', userinfo.name, true) 
        .addField('Discriminator', userinfo.discrim, true)
        .addField('ID', userinfo.id, true) 
        .addField("status", userinfo.status, true)
        //.addField("Registered", userinfo.registered)
        .addField("Joined", userinfo.joined)
        .setColor(0xffffff);
        
    return message.channel.send(embed); //Send the embed we just created
    
}

module.exports.help = {
    name: "whios",
    description: "for test the bot"
}