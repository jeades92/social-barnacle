const db = require('../config/connection');
const { Thought, User } = require ('../models')
const users = [
    {
        username: 'username1',
        email: 'email1@mail.com'
    },
    {
        username: 'username2',
        email: 'email2@mail.com'
    },
    {
        username: 'username3',
        email: 'email3@mail.com'
    }
]

const thoughts = [
    {
        thoughtText: "One cool thought",
        username: 'username1'
    },
    {
        thoughtText: "Two cool thoughts",
        username: 'username2'
    },
    {
        thoughtText: "Three cool thoughts",
        username: 'username3'
    },
]

db.once('open', async () => {
    await User.insertMany(users)
    await Thought.insertMany(thoughts)
    process.exit(0)
  });