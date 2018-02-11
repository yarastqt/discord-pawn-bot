'use strict'

const { Client } = require('discord.js')


const token = process.env.APP_TOKEN
const client = new Client()

client.login(token)

client.on('ready', () => {
  client.user.setActivity('подъезде')
})

client.on('voiceStateUpdate', async (prevMember, nextMember) => {
  const prevMemberChannel = prevMember.voiceChannel
  const nextMemberChannel = nextMember.voiceChannel

  // TODO: User redis or ?? for cache join in 12 - 24 hours
  if (prevMemberChannel === undefined && nextMemberChannel !== undefined) {
    try {
      const connection = await nextMemberChannel.join()
    }
    catch (error) {
      console.log(error)
    }
  }
})
