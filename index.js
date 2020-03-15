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
});

bot.on("guildMemberAdd", member => {

  var role = member.guild.roles.find("name", "burger van heerlen");


  
  const channel = member.guild.channels.find("name", "welkom");

  if (!channel) return;
  channel.send(`Welcome to the server ${member}.`);

  const channel12 = member.guild.channels.find("name", "logs");
    if (!channel12) console.log("Kan het kanaal niet vinden.");
 
    var joinEmbed = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`${member.user.username}, **joined the server**.`)
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter("User joined.");
 
    channel12.send(joinEmbed);

    if (!role) return;

   member.addRole(role);

});

bot.on("guildMemberRemove", member => {
 
  const channel1 = member.guild.channels.find("name", "logs");
  if (!channel1) console.log("Kan het kanaal niet vinden.");

  var leaveEmbed = new discord.RichEmbed()
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
      .setColor("#FF0000")
      .setTimestamp()
      .setFooter("User leaved.");

  channel1.send(leaveEmbed);

});

bot.on('guildBanAdd', member => {
  const channel123 = member.guild.channels.find("name", "logs");
  if (!channel123) console.log("Kan het kanaal niet vinden.");

  var joinEmbed = new discord.RichEmbed()
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
      .setDescription(`${member.user.username}, **has banned**.`)
      .setColor("#00FF00")
      .setTimestamp()
      .setFooter("User joined.");

  channel123.send(joinEmbed);
	
});
bot.on('messageDelete', member => {
  const channel1234 = member.guild.channels.find("name", "logs");
  if (!channel1234) console.log("Kan het kanaal niet vinden.");

  var joinEmbed = new discord.RichEmbed()
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
      .setDescription(`${member.user.username}, **has deleted: ${executor.tag}.**.`)
      .setColor("#fcba03")
      .setTimestamp()
      .setFooter("User joined.");

  channel1234.send(joinEmbed);

});

//var swearWord = ["koe","kalf"];


bot.on("message", async message => {

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
 
  if (commands) commands.run(bot, message, arguments);

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
