import mongoose from 'mongoose'

const feedbackSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        bookingId:{
            type:Number,
            required:false
        },
        roomId:{
            type:Number,
            required:false
        },
        rating:{
            type:Number,
            required:true,
            min:1,
            max:5
        },
        comment:{
            type:String,
            default:""
        },
        date:{
            type:Date,
            default:Date.now
        },
    },
        {
            timestamps:true
        }

    
);

const Feedback = mongoose.model("Feedbacks", feedbackSchema)

export default Feedback;