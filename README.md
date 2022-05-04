# Adding to Server
Can fill out the following link:
```
https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=PERMISSION_INT&scope=SCOPE
```
Where `CLIENT_ID` is the bot's client ID,
`PERMISSION_INT` is the permission integer calculated from the [Bitwise Permission Flags](https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags),
and `SCOPE` is the [OAuth2 scope](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes)

# Required Environment Parameters
* `TOKEN` = Bot's token
* `CLIENTID` = Bot's client ID
* `GUILDID` = Discord server ID

# Command Deployment
To register slash commands to a server, run the `deploy-commands.js` file locally