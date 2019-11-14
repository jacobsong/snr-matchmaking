const Discord = require("discord.js");
const Player = require("../models/Player");

module.exports = {
  name: 'profile',
  description: 'Returns your stats',
  guildOnly: false,
  args: false,
  argsList: undefined,
  async execute(msg, args) {
    const embed = new Discord.RichEmbed();
    embed.setDescription("profile");
    msg.channel.send(embed);
  }
}