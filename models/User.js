const mongoose  = require('mongoose');
const bcrypt    = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(next) {
    const user = this;
    try {
        const salt = await bcrypt.genSalt();
        console.log("Salt", salt);        
        const hash = await bcrypt.hash(user.password, salt);
        console.log("hash", hash);
        user.password = hash;
        next();
    } catch(e){
        next(e);
    }
}); 


const User = mongoose.model('User', UserSchema);

module.exports = User;