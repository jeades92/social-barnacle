const { User, Thought } = require('../models');



async function newUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function getAllUsers(req, res) {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function getSingleUser(req, res) {
    try {
        const user = await User.findOne({_id:req.params.id})
        .select('-__v')
        // .populate('friends')
        // .populate('thoughts')
        if (!user) {
            return res.status(404).json({message:'no user with this id'})
        }
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}





module.exports = {
    newUser,
    getAllUsers,
    getSingleUser
};

// Models
// User:


// username

// String
// Unique
// Required
// Trimmed



// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)



// thoughts

// Array of _id values referencing the Thought model



// friends

// Array of _id values referencing the User model (self-reference)