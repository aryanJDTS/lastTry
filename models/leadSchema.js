const mongoose= require("mongoose");
const leadSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    answers: {
        answerOne: String,
        answerTwo: String,
        answerThree: String,
        answerFour: String
    }
});
module.exports= mongoose.model('Leads',leadSchema);