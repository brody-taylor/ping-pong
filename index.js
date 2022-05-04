const { Client, Intents } = require('discord.js');

// Abort if missing token
let token = process.env.TOKEN
if (!token) {
    throw new Error('missing token');
}

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

// Log once the client is ready
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);