const JSONdb = require('simple-json-db')

module.exports = (interaction) => {
  const db = new JSONdb(`db/users/${interaction.user.id}.json`)

  db.set(interaction.guild.id, null)

  interaction.reply({
    content: 'Your birthday has been unset.',
    ephemeral: true
  })
}
