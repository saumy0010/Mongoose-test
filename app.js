const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb+srv://bahubali:test123@cluster0.p5eb8.mongodb.net/mongo?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB.......');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

// Schema for the user
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

// Model for the user
const User = mongoose.model('User', userSchema);


// Aync function to create a user
const createDocument = async() => {

    try {
        const user = new User({
            name: 'Ravi Sins',
            age: 169,

        })

        const user1 = new User({
            name: 'Sanskar Agrawal',
            age: 21,

        })

        const user2 = new User({
            name: 'Dev Kandpal',
            age: 22,

        })

        const user3 = new User({
            name: 'Asif Ali',
            age: 24,

        })

        // Inserting the user
        const result = await User.insertMany([user, user1, user2, user3]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

// Calling the function to create a user
// createDocument();

// Aync function to get all the users
const getDocument = async() => {

    try {
        // Getting the user
        const user = await User.find();
        console.log(user);
    } catch (err) {
        console.log(err);
    }

}

// getDocument();

const updateDocument = async() => {

    try {
        // Updating the user
        const result = await User.updateOne({ name: 'Ravi Sins' }, { $set: { age: 170 } });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

// Updating the user data
updateDocument();