const mongoose = require('mongoose');
const {Schema} = mongoose
const userSchema = new Schema({
    name:String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    psoId: {
        type: Schema.Types.ObjectId,
        ref: 'Pso' // Reference to PSO model
    },
    percentageId: {
        type: Schema.Types.ObjectId,
        ref: 'PercentageModel' // Reference to Percentage model
    }
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;