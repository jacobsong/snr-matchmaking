const Discord = require("discord.js");
const validMember = "Villains";
const validMod = "Super Villians";
const { prefix } = require("../config/config");

const checkArgs = (msg, command, args) => {
  if (command.guildOnly && msg.channel.type !== 'text') {
    msg.reply('I can\'t execute that command inside DMs!');

    return "failed";
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${msg.author}!`;
    if (command.argsList) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.argsList}\``;
    }
    msg.channel.send(reply);

    return "failed";
  }

  return "success";
};

const checkMember = (member) => {
  const errors = new Discord.RichEmbed();

  if (member.roles.some((role) => role.name === validMember)) {
    return null;
  } else {
    errors.setColor("RED");
    errors.setDescription("**Failed**, not a crew member");
    return errors;
  }
};

const checkMod = (msg) => {
  const errors = new Discord.RichEmbed();

  if (msg.member.roles.some((role) => role.name === validMod)) {
    return null;
  } else {
    errors.setColor("RED");
    errors.setDescription("**Failed**, you are not a mod");
    return errors;
  }
};

const checkAdmin = (msg) => {
  const errors = new Discord.RichEmbed();

  if (msg.member.roles.some((role) => role.name === validMod)) {
    return null;
  } else {
    errors.setColor("RED");
    errors.setDescription("**Failed**, you are not a mod");
    return errors;
  }
};

module.exports = {
  checkArgs,
  checkMember,
  checkMod,
  checkAdmin
};