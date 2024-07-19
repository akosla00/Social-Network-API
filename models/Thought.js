const { get } = require('http');
const { Schema, model } = require('mongoose');


const thoughtSchema= new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: 
        },
        thoughts: [Thought],
        friends: [userSchema]
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User
