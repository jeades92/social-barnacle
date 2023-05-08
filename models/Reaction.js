const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
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

        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        
        }
    }
);

module.exports = reactionSchema

