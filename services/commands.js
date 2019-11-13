const Discord = require("discord.js");
const Player = require("../models/Player");

const help = (msg) => {
  const embed = new Discord.RichEmbed()
    .setTitle("Command List")
    .setColor("BLUE")
    .addField("**register**", "- Registers yourself")
    .addField("**profile**", "- Returns stats for yourself")
    .addField("**profile** *<user>*", "- Returns stats for the mentioned user")
    .addField("**bounties**", "- Fetches a list of people with bounties")
    .addField("**leaderboard**", "- Shows the leaderboard")
    .addField("**reset** *<user>*", "- Resets stats for the mentioned user")
    .addField("**resetboard**", "- Resets the leaderboard")
    .addField("**deleteboard**", "- Deletes the leaderboard")
    .addField("**decay**", "- Decays ELO for players that have not played a match in 7 days")

  msg.channel.send(embed);
};

const register = async (msg) => {
  const embed = new Discord.RichEmbed();

  try {
    const existingPlayer = await Player.find({ discordId: playerId }).limit(1);

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
    embed.setDescription(`**Success**, registered ${playerName}`);
    msg.channel.send(embed);

  } catch {
    embed.setColor("RED");
    embed.setDescription("Database error");
    msg.channel.send(embed);
  }
};

module.exports = {
  help,
  register
}