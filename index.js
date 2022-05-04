const { Client, Intents } = require('discord.js');

// Abort if missing token
let token = process.env.TOKEN
if (!token) {
    throw new Error('missing token');
}

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// Log once the client is ready
client.once('ready', () => {
    console.log('Ready!');
});

const reply = 'Pong!'

// Event listener for 'ping' command
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        console.log(`Received command: [${commandName}]`);
        await interaction.reply(reply)
            .then(() => console.log(`Reply sent: [${reply}]`))
            .catch(console.error);
    }
});

client.on('messageCreate', async msg => {
    switch (msg.content.toLowerCase()) {
        case "!ping":
            console.log(`Received message: [${msg.content}]`);
            await msg.channel.send(reply)
                .then(msg => console.log(`Sent message: ${msg.content}`))
                .catch(console.error);
    }
});

// Login to Discord with your client's token
client.login(token);