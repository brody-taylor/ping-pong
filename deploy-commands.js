const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')

// Get token, client ID, and guild ID from env
let token    = process.env.TOKEN
let clientId = process.env.CLIENTID
let guildId  = process.env.GUILDID
if (!(token && clientId && guildId)) {
    throw new Error('missing required params');
}

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);