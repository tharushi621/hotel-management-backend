import mongoose from 'mongoose'

const roomSchema = mongoose.Schema(
    {
        roomId:{
            type:Number,
            required:true,
            unique:true
        },
        category:{
            type:String,
            required:true
        },
        availability:{
            type:Boolean,
            required:true,
            default:true
        },
        maxGuests:{
            type:Number,
            required:true,
            default :3
        },
        photos:[
            {
                type:String
            }
        ],
        specialDescription:{
            type:String,
            default:""
        },
        note:{
            type:String,
            default:""
        }
    }
)

const Room = mongoose.model("Rooms",roomSchema)

export default Room;