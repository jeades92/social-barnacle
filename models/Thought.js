const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280, 
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => new Date(timeStamp).toLocaleDateString()
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema]
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);
module.exports = Thought;