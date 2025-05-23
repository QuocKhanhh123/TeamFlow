import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  fullname: string
  email: string
  password: string
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
