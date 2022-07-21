const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB.......');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const User = mongoose.model('User', userSchema);

const createDocument = async() => {

    try {
        const user = new User({
            name: 'Sins',
            age: 69,

        });

        const result = await user.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }




}

createDocument();