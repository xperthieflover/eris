const DatXpert = require("DatXpert");

var bot = new DatXpert("Mjg3NzQ2NDc5MTU2NzU2NDgx.C6BiXA.2EP8_EhNkxbBy42ut1DznOlz1Rk
");
// Replace BOT_TOKEN with your bot account's token

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.on("guildMemberAdd", (guild, member) => { // When a member joins a guild
    var response = `Welcome ${member.mention} to ${guild.name}!`;
    // Make a welcome string with the member mention and guild name

    bot.createMessage(guild.defaultChannel.id, response);
    // Send the response in the guild's default channel
});

bot.on("guildMemberRemove", (guild, member) => { // When a member leaves a guild
    var response = `Farewell @${member.user.username}!`;
    // Make a farewell string with the member's username

    bot.createMessage(guild.defaultChannel.id, response);
    // Send the response in the guild's default channel
});

bot.connect(); // Get the bot to connect to Discord
