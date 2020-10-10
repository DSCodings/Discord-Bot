const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter(f => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("cannot find filles");
    return;
  }

  jsFiles.forEach((f,i) => {
    var fileGet = require(`./commands/${f}`);
    console.log(`The fil ${f} is loaded`); 

    bot.commands.set(fileGet.help.name, fileGet);
  });

});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity("De controle", {type: "playing"});
    //bot.user.setStatus("offline")
    
    
});

bot.on("guildMemberAdd", member => {

  var text = `Welkom to the server ${member}.`;

  const channel12 = member.guild.channels.find("name", "logs");
    if (!channel12) console.log("Kan het kanaal niet vinden.");
 
    var joinEmbed = new discord.RichEmbed()
        .setTitle("**USER JOINED**")
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`${member.user.username}, **joined the server**.`)
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter('Mady by jan0de0man');
 
    channel12.send(joinEmbed);

    member.send(text).catch(() => {

      console.log("**")

    });

    var role = member.guild.roles.find("name", "burger van heerlen");


  
    const channel9 = member.guild.channels.find("name", "welkom");

    if (!channel9) return;
    channel9.send(`Welcome to the server ${member}.`);

    if (!role) return;

   member.addRole(role);

});

bot.on("guildMemberRemove", member => {
 
  const channel1 = member.guild.channels.find("name", "logs");
  if (!channel1) console.log("Kan het kanaal niet vinden.");

  var leaveEmbed = new discord.RichEmbed()
      .setTitle("**USER LEAVED**")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
      .setDescription(`${member.user.username}, **Has left the server**.`)
      .setColor("#FF0000")
      .setTimestamp()
      .setFooter('Mady by jan0de0man');

  channel1.send(leaveEmbed);
});



// bot.on("guildBanAdd", (Userbanned) => {
//   // const channel123 = member.guild.channels.find("name", "logs");
//   // if (!channel123) console.log("Kan het kanaal niet vinden.");

//   var bannedEmbed = new discord.RichEmbed()
//       .setTitle("**USER BANNED**")
//      //.setThumbnail(Userbanned.author.avatarURL)
//       .setDescription(`${Userbanned.user.username}, **has banned**.`)
//       .setColor("#00FF00")
//       .setTimestamp()
//       .setFooter('Mady by jan0de0man');

//   //channel123.send(bannedEmbed);
//   let DeleteChannel1 = Userbanned.guild.channels.find(x => x.name === "logs");
//   DeleteChannel1.send(bannedEmbed);
	
// });


bot.on("messageDelete", (messageDelete) => {

  let DeleteEmbed = new discord.RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .setThumbnail(messageDelete.author.avatarURL)
    .setColor("#fc3c3c")
    .addField("Author", messageDelete.author.tag, true)
    .addField("Channel", messageDelete.channel, true)
    .addField("Message", messageDelete.content)
    .setFooter(`Message ID: ${messageDelete.id} | Author ID: ${messageDelete.author.id}`);

  let DeleteChannel = messageDelete.guild.channels.find(x => x.name === "logs");
  DeleteChannel.send(DeleteEmbed);
});
bot.on("roleCreate", function(role){
  console.error(`a role is created`);
  let createrolEmbed = new discord.RichEmbed()
    .setTitle("**ROL CREATED**")
    .setColor("#00FF00")
    .setDescription("role Name: " + role.name + " Has created.");

  let rolcreatechannel = role.guild.channels.find(x => x.name === "logs");
  if(!rolcreatechannel) return console.log("Kan het kanaal niet vinden.");
  rolcreatechannel.send(createrolEmbed);

});

bot.on("roleDelete", function(role){
  console.error(`a guild role is deleted`);
  let DeleterolEmbed = new discord.RichEmbed()
    .setTitle("**ROL DELETED**")
    .setColor("#fc3c3c")
    .setDescription("role Name: " + role.name + " Has deleted.");

  let rolDeletedchannel = role.guild.channels.find(x => x.name === "logs");
  if(!rolDeletedchannel) return console.log("Kan het kanaal niet vinden.");
  rolDeletedchannel.send(DeleterolEmbed);
});

bot.on("roleUpdate", function(oldRole, newRole){
  if(oldRole.name === newRole.name){
    return;
 }
  let LOG129Embed = new discord.RichEmbed()
  .setColor("#ff6a00")
  .setDescription("**ROL EDITED**")
  .addField("Old name", oldRole.name, true)
  .addField("New name", newRole.name, true)
  .setTimestamp()
  .setFooter('Mady by jan0de0man');

  let loggingCHanne129l = newRole.guild.channels.find(ch => ch.name === "logs");
  if(!loggingCHanne129l) return console.log("Kan het kanaal niet vinden.");

  loggingCHanne129l.send(LOG129Embed);
});



bot.on("channelCreate",async (channel) => {
  console.log("channel created")
  let createchannelEmbed = new discord.RichEmbed()
    .setTitle("**CHANNEL_CREATED**")
    .setColor("#00FF00")
    .setDescription("Channel Name: " + channel.name + " Has created with Type: " + channel.type)
    .setTimestamp()
    .setFooter('Mady by jan0de0man');

  let createchannelChannel = channel.guild.channels.find(x => x.name === "logs");
  if(!createchannelChannel) return console.log("Kan het kanaal niet vinden.");
  createchannelChannel.send(createchannelEmbed);
});
bot.on("channelDelete",async (channel) => {
  console.log("Channel deleted.")
  let DeletechannelEmbed = new discord.RichEmbed()
    .setTitle("**CHANNEL_DELETED**")
    .setColor("#fc3c3c")
    .setDescription("Channel Name: " + channel.name + " Has Deleted with Type: " + channel.type)
    .setTimestamp()
    .setFooter('Mady by jan0de0man');

  let DeletechannelChannel = channel.guild.channels.find(x => x.name === "logs");
  if(!DeletechannelChannel) return console.log("Kan het kanaal niet vinden.");
  DeletechannelChannel.send(DeletechannelEmbed);
});


//  bot.on("guildBanAdd", member => {
//   //const channel1239 = member.guild.channels.find("name", "logs");
// 	channel.send(`${user.tag} got hit with the swift hammer of justice in the guild ${guild.name}.`);
// });
bot.on("messageUpdate", async(oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content){
    return;
  }
  let LOGEmbed = new discord.RichEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("#ff6a00")
  .setDescription("**MESSAGE EDITED**")
  .addField("Before", oldMessage.content, true)
  .addField("after", newMessage.content, true)
  .setTimestamp()
  .setFooter('Mady by jan0de0man');

  let loggingCHannel = newMessage.guild.channels.find(ch => ch.name === "logs");
  if(!loggingCHannel) return console.log("Kan het kanaal niet vinden.");

  loggingCHannel.send(LOGEmbed);



});
// bot.on("messageDeleteBulk", function(messages){
//   console.log(`messages are deleted -> ${messages}`);
//   // let LOG12Embed = new discord.RichEmbed()
//   // .setColor("#ff6a00")
//   // .setDescription("**MESSAGE DELETED**")
//   // .addField("message deleted", messages + "are deleted", true)
//   // .setTimestamp()
//   // .setFooter('Mady by jan0de0man');

//   // let loggingCHanne12l = messages.guild.channels.find(ch => ch.name === "logs");
//   // if(!loggingCHanne12l) return console.log("Kan het kanaal niet vinden.");

//   // loggingCHanne12l.send(LOG12Embed);

// });


bot.on("channelUpdate", async(oldChannel, newChannel) => {
  console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
  console.log("channel")
  console.log(oldChannel)
  console.log(newChannel)
  if(oldChannel.name === newChannel.name){
     return;
  }
  let LOG1Embed = new discord.RichEmbed()
  .setColor("#ff6a00")
  .setDescription("**CHANNEL EDITED**")
  .addField("Before", oldChannel.name, true)
  .addField("after", newChannel.name, true)
  .setTimestamp()
  .setFooter('Mady by jan0de0man');

  let loggingCHanne1l = newChannel.guild.channels.find(ch => ch.name === "logs");
  if(!loggingCHanne1l) return console.log("Kan het kanaal niet vinden.");

  loggingCHanne1l.send(LOG1Embed);



});



// bot.on("messageDelete", member => {
//   const channel12 = member.guild.channels.find("name", "logs");
//   if (!channel12) console.log("Kan het kanaal niet vinden.");

//   var joinEmbed = new discord.RichEmbed()
//       //.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
//       .setDescription(`${message.author.tag}, **joined the server**.`)
//       .setColor("#00FF00")
//       .setTimestamp()
//       .setFooter("User joined.");

//   channel12.send(joinEmbed)

// });

// //var swearWord = ["koe","kalf"];


bot.on("message", async message => {

  console.log("binnen1")
  // Als de bot bericht stuurd
  if (message.author.bot) return;

  if (message.channel.type === "dm") return;

  var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
  
  if (!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botConfig.prefix
    };
  };

  var prefix = prefixes[message.guild.id].prefixes;

  var prefix = botConfig.prefix;

  var messageArrey = message.content.split(" ");

  var command = messageArrey[0];

  var arguments = messageArrey.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));
  //const active = new Map();
 
    // var options = {
    //   active: active
    // }
    console.log("binnen2")
  if (commands){ 
    console.log(message.author)
    if (message.author != "jan0de0man") return message.reply("Gelieven niet te kloten met de bot.");
    commands.run(bot, message, arguments);
  }

  //if (commands) commands.run(bot, message, arguments, Options);

  var swearWord = JSON.parse(fs.readFileSync("./data/swearWords.json"));

  var msg = message.content.toLowerCase();

    for (var i = 0; i < swearWord["vloekWoorden"].length; i++) {

        if (msg.includes(swearWord["vloekWoorden"][i])) {

            message.delete();

            return message.channel.send("Please don't curse").then(msg => msg.delete(3000));

        }

    }
    

//   if (!commands) {

//     var swearWords = JSON.parse(fs.readFileSync("./data/swearWords.json"));
//     // De tekst die gevormd moet worden.
//     var sentenceUser = "";
//     // Aantal vloekwoorden dat er al zijn.
//     var amountSwearWords = 0;

//     // Over ieder woord gaan in de zin.
//     for (var y = 0; y < messageArray.length; y++) {

//         // Opgegeven wat het woord is dat veranderd moet worden.
//         var changeWord = "";

//         // Voor ieder vloek woord in het bestand
//         for (var i = 0; i < swearWords["vloekWoorden"].length; i++) {

//             // Zorg dat het woord in kleine letters is.
//             var word = messageArray[y].toLowerCase();

//             // Als het woord gelijk is met het woord dat we aan bekijken zijn in de lijst doen we het volgende.
//             if (word == swearWords["vloekWoorden"][i]) {

//                 // Verander het woord naar **
//                 changeWord = word.replace(swearWords["vloekWoorden"][i], "****");

//                 // Plaats het woord mee in de zin met de rest
//                 sentenceUser = sentenceUser + " " + changeWord;

//                 amountSwearWords++;

//             }

//         }

//         // Als we het woord hebben vergeleken en deze staat niet in de lijst moeten we het wel nog aan de zin
//         // toevoegen.
//         if (!changeWord) {

//             // Toevoegen
//             sentenceUser = sentenceUser + " " + messageArray[y];

//         }

//     }

//     // Als er een vloekwoord is dan delete de regel en vervang het.
//     if (amountSwearWords != 0) {

//         message.delete();
//         message.channel.send(sentenceUser);
//         message.channel.send(message.author + " Niet vloeken A.U.B");

//     }

// }




});


bot.login(process.env.token);
