
const {v4: uuid} = require('uuid')
const {clone, merge} = require('mixme')

const store =  {
  channels: {
    
  },
  users:{
  },
  messages:{

  }

}

module.exports = {
  channels: {
    create: async (channel) => {
      if(!channel.name) throw Error('Invalid channel')
      const id = uuid()
      store.channels[id] = channel
      return merge(channel, {id: id})
    },
    list: async () => {
      return Object.keys(store.channels).map( (id) => {
        const channel = clone(store.channels[id])
        channel.id = id
        return channel
      })
    },
    update: (id, channel) => {
      const original = store.channels[id]
      if(!original) throw Error('Unregistered channel id')
      store.channels[id] = merge(original, channel)
    },
    delete: (id, channel) => {
      const original = store.channels[id]
      if(!original) throw Error('Unregistered channel id')
      delete store.channels[id]
    }

    
  },

  users: {
    create: async (user) => {
      if(!user.username) throw Error('Invalid user')
      const id = uuid()
      store.users[id] = user
      return merge(user, {id: id})
    },
    list: async () => {
      return Object.keys(store.users).map( (id) => {
        const user = clone(store.users[id])
        user.id = id
        return user
      })
    },
    update: (id, user) => {
      const original = store.users[id]
      if(!original) throw Error('Unregistered user id')
      store.users[id] = merge(original, user)
    },
    delete: (id, user) => {
      const original = store.users[id]
      if(!original) throw Error('Unregistered user id')
      delete store.users[id]
    }
  },

  messages: {
    create: async (message) => {
      if(!message.content) throw Error('Invalid message')
      const id = uuid()
      message.creation = Date.now();
      store.messages[id] = message
      return merge(message, {id: id})
    },
    list: async () => {
      return Object.keys(store.messages).map( (id) => {
        const message = clone(store.messages[id])
        message.id = id
        return message
      })
    },
    update: (id, message) => {
      const original = store.messages[id]
      if(!original) throw Error('Unregistered message id')
      store.messages[it] = merge(original, message)
    },
    delete: (id, message) => {
      const original = store.messages[id]
      if(!original) throw Error('Unregistered message id')
      delete store.messages[id]
    }
  },

  admin: {
    clear: async () => {
      store.channels = {}
      store.users = {}
      store.messages = {}
      // await db.clear()
    }
  }
}
