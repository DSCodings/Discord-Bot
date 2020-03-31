const discord = require("discord.js");

module.exports = {
	name: 'test',
	description: 'test!',
	execute(message, args) {
		message.channel.send('TOP');
	},
};