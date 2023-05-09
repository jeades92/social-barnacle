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
        const user = await User.findOne({ _id: req.params.id })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
        if (!user) {
            return res.status(404).json({ message: 'no user with this id' })
        }
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
        if (!user) {
            return res.status(404).json({ message: 'no user with this id' })
        }
        res.json('User updated');
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}


async function deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id })
        if (!user) {
            return res.status(404).json('no user with this id')
        } 
        await Thought.deleteMany({_id:{$in:user.thoughts}})
        res.json('User and thoughts successfully deleted');
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}
// THEN I am able to successfully create, update, and delete users and thoughts in my database

async function addFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true })
        if (!user) {
            return res.status(404).json('no user with this id')
        }
        res.json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}
async function removeFriend(req, res) {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true })
        if (!user) {
            return res.status(404).json('no user with this id')
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
    getSingleUser,
    updateUser,
    deleteUser, 
    addFriend,
    removeFriend
};

