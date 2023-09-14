import { Schema, model } from "mongoose";

const userSchema = Schema ({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String},
    photo: {type: String, default: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'},
    birth_date: {type: Date},
    age: {type: Number},
    phone: {type: Number},
    verified: {type: Boolean, default: false}

},
{
    timestamps: true
}
)

const User = model('user', userSchema)

export default User