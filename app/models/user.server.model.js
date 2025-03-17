const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String, 
        trim: true
    },
    lastName: {
        type: String, 
        trim: true
    }, 
    email: {
        type: String,
        trim: true
    }, 
    username: {
        type: String,
        trim: true
    }, 
    password: {
        type: String, 
        trim: true
    },
    website: {
        type: String,
        set: function(url) {
            if (!url) return url;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                return 'http://' + url;
            }
            return url;
        }
    },
    created: {
        type: Date, 
        default: Date.now
    }
});

UserSchema.set('toJSON', { getters: true });

mongoose.model('User', UserSchema);