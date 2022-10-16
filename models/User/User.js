const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true },
    name: { type: String, required: true },

    email: {
      type: String,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
      },
      unique: true,
      require: true,
    },

    password: {
      type: String,
      trim: true,
      minLength: [8, 'password Must be at least 6 characters'],
      validate: {
        validator: function (value) {
          return validator.isStrongPassword(value);
        },
      },
      select: false,
      require: true,
    },

    isAdmin: { type: Boolean, required: true, default: false },

    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    messages: [
      {
        name: { type: String, required: true },
        name_ar: { type: String, required: true },
        email: {
          type: String,
          required: true,
          validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
          },
        },
        phone_or_whatsapp: { type: Number, required: true },
        company: { type: String, required: true },
        company_ar: { type: String, required: true },
        country: { type: String, required: true },
        country_ar: { type: String, required: true },
        number_of_network: { type: Number, required: true },
        network_traffic: { type: Number, required: true },
        network_type: { type: String, required: true },
        network_type_ar: { type: String, required: true },
        message: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Hash Password before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Match Password to hashed password in database
UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate Token for UserSchema
UserSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, `${process.env.JWT_SECRET_TOKEN}`, {
    expiresIn: `${process.env.JWT_EXPIRES_IN}`,
  });
  return token;
};

module.exports = mongoose.model('User', UserSchema);
