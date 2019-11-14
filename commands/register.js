const Discord = require("discord.js");
const Player = require("../models/Player");

module.exports = {
  name: 'register',
  description: 'Register yourself',
  guildOnly: true,
  args: false,
  argsList: undefined,
  async execute(msg, args) {
    const embed = new Discord.RichEmbed();

    try {
      const existingPlayer = await Player.find({ discordId: msg.author.id }).limit(1);

      if (existingPlayer.length) {
        embed.setColor("GREEN");
        embed.setDescription("Already registered");
        msg.channel.send(embed);
        return;
      }

      await new Player({
        discordId: msg.author.id,
        discordName: msg.author.username,
        discordAvatar: msg.author.avatarURL
      }).save();

      embed.setColor("GREEN");
      embed.setDescription(`**Success**, registered ${msg.author.username}`);
      msg.channel.send(embed);

    } catch {
      embed.setColor("RED");
      embed.setDescription("Database error");
      msg.channel.send(embed);
    }
  }
}