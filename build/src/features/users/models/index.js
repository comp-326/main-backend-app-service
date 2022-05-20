"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("../../../databases/mongodb"));
const userSchema = new mongodb_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true
    },
    bio: {
        type: String,
        default: '',
        trim: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        select: false
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'rather not say'],
        default: 'rather not say',
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: false
    },
    role: {
        type: mongodb_1.default.SchemaTypes.ObjectId,
        required: true,
        ref: 'UserRoles'
    },
    profilePicture: {
        type: mongodb_1.default.SchemaTypes.ObjectId,
        required: false,
        ref: 'Media',
        default: ''
    }
});
userSchema.statics.findByEmail = async function (email) {
    const user = await userModel.findOne({ email }).select('+password');
    return user;
};
const userModel = mongodb_1.default.model('Users', userSchema);
exports.default = userModel;

//# sourceMappingURL=index.js.map
