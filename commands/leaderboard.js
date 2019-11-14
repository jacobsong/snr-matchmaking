const Discord = require("discord.js");
const Player = require("../models/Player");

module.exports = {
  name: 'leaderboard',
  description: 'Displays the top 20 of the leaderboard',
  guildOnly: false,
  args: false,
  argsList: undefined,
  async execute(msg, args) {
    const embed = new Discord.RichEmbed();
    embed.setDescription("Leaderboard");
    msg.channel.send(embed);
  }
}