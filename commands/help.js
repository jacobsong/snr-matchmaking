const Discord = require("discord.js");

module.exports = {
  name: 'help',
  description: 'List all of my commands',
  guildOnly: false,
  args: false,
  argsList: undefined,
  execute(msg, args) {
    const { commands } = msg.client;
    const embed = new Discord.RichEmbed();

    embed.setTitle("Command List");
    embed.setColor("BLUE");
    commands.map(command => {
      const argsList = (command.argsList != undefined) ? `*${command.argsList}*` : "";
      embed.addField(`**${command.name}** ${argsList}`, ` - ${command.description}`);
    });

    msg.author.send(embed)
      .then(() => {
        if (msg.channel.type === 'dm') return;
        msg.reply('I sent you a DM with all my commands!');
      })
      .catch(error => {
        msg.reply('Failed to send you a DM.  Do you have DMs disabled?');
      });

    return;
  },
};