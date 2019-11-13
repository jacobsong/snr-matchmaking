const Discord = require("discord.js");
const validMember = "Villains";
const validMod = "Super Villians";

const isCommand = (msg) => {

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
  isCommand,
  checkMember,
  checkMod,
  checkAdmin
};