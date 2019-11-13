const Discord = require("discord.js");
const { prefix, token, mongoURI } = require("../config/config");
const commands = require("./services/commands");
const client = new Discord.Client({ disabledEvents: ["TYPING_START"] });

// Verify connected and set presence
client.once("ready", () => {
  console.log("Connected as " + client.user.tag);
  client.user.setPresence({ game: { name: "type =help" } });
});

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true }).then(
  () => {
    console.log("MongoDB connected...\n");
  },
  err => {
    console.log("MongoDB could not connect...\n" + err);
  }
);

// Respond to commands
client.on("message", async message => {
  if (message.content === `${prefix}help`) {
    commands.help(message);
    message.delete(1500);
  }

  if (message.content === `${prefix}register`) {
    await commands.register(message);
    message.delete(1500);
  }

});


// Login with bot token
try {
  client.login(token);
} catch {
  console.log("Failed to login to Discord");
}
